import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth } from "../firebase/firebase";
import db from "../firebase/firestore";
import { addNotification } from "../firebase/notificationService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===========================
  // Register
  // ===========================

  const register = async ({
    fullName,
    phone,
    email,
    password,
  }) => {
    try {
      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(result.user, {
        displayName: fullName,
      });

      const userRef = doc(
        db,
        "users",
        result.user.uid
      );

      await setDoc(userRef, {
        uid: result.user.uid,
        name: fullName,
        phone,
        email,
        photoURL: "",
        role: "client",
        company: "",
        address: "",
        bio: "",
        createdAt: serverTimestamp(),
      });

      await addNotification({
        uid: result.user.uid,
        title: "Welcome 🎉",
        message:
          "Your account has been created successfully.",
        type: "success",
      });

      console.log("User & Notification Created");

      return result;
    } catch (error) {
      console.error("Register Error:", error);
      throw error;
    }
  };
    // ===========================
  // Login
  // ===========================

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      await addNotification({
        uid: result.user.uid,
        title: "Login Successful",
        message: "Welcome back to your dashboard.",
        type: "success",
      });

      return result;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  // ===========================
  // Google Login
  // ===========================

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(
        auth,
        provider
      );

      const userRef = doc(
        db,
        "users",
        result.user.uid
      );

      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: result.user.uid,
          name: result.user.displayName || "",
          email: result.user.email || "",
          phone: "",
          photoURL: result.user.photoURL || "",
          role: "client",
          company: "",
          address: "",
          bio: "",
          createdAt: serverTimestamp(),
        });
      }

      await addNotification({
        uid: result.user.uid,
        title: "Google Login",
        message: "Logged in successfully using Google.",
        type: "success",
      });

      return result;
    } catch (error) {
      console.error("Google Login Error:", error);
      throw error;
    }
  };

  // ===========================
  // Logout
  // ===========================

  const logout = async () => {
    try {
      if (currentUser) {
        await addNotification({
          uid: currentUser.uid,
          title: "Logout",
          message: "You have logged out successfully.",
          type: "info",
        });
      }

      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
      throw error;
    }
  };

  // ===========================
  // Forgot Password
  // ===========================

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Forgot Password Error:", error);
      throw error;
    }
  };
    // ===========================
  // Change Password
  // ===========================

  const changePassword = async (
    currentPassword,
    newPassword
  ) => {
    try {
      const credential =
        EmailAuthProvider.credential(
          auth.currentUser.email,
          currentPassword
        );

      await reauthenticateWithCredential(
        auth.currentUser,
        credential
      );

      await updatePassword(
        auth.currentUser,
        newPassword
      );

      await addNotification({
        uid: currentUser.uid,
        title: "Password Updated",
        message:
          "Your password has been changed successfully.",
        type: "success",
      });
    } catch (error) {
      console.error(
        "Change Password Error:",
        error
      );
      throw error;
    }
  };

  // ===========================
  // Update Profile
  // ===========================

  const updateUserProfile = async (
    data
  ) => {
    try {
      if (!currentUser) {
        throw new Error(
          "User not logged in"
        );
      }

      if (data.name) {
        await updateProfile(
          currentUser,
          {
            displayName: data.name,
          }
        );
      }

      await updateDoc(
        doc(
          db,
          "users",
          currentUser.uid
        ),
        {
          ...data,
        }
      );

      setUserData((prev) => ({
        ...prev,
        ...data,
      }));

      await addNotification({
        uid: currentUser.uid,
        title: "Profile Updated",
        message:
          "Your profile has been updated successfully.",
        type: "profile",
      });
    } catch (error) {
      console.error(
        "Profile Update Error:",
        error
      );
      throw error;
    }
  };

  // ===========================
  // Auth State Listener
  // ===========================

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {
          try {
            if (!user) {
              setCurrentUser(null);
              setUserData(null);
              setLoading(false);
              return;
            }

            setCurrentUser(user);

            const userRef = doc(
              db,
              "users",
              user.uid
            );

            const userSnap =
              await getDoc(userRef);

            if (userSnap.exists()) {
              setUserData(
                userSnap.data()
              );
            } else {
              const newUser = {
                uid: user.uid,
                name:
                  user.displayName ||
                  "",
                email:
                  user.email || "",
                phone: "",
                photoURL:
                  user.photoURL ||
                  "",
                role: "client",
                company: "",
                address: "",
                bio: "",
                createdAt:
                  serverTimestamp(),
              };

              await setDoc(
                userRef,
                newUser
              );

              setUserData(newUser);
            }
          } catch (error) {
            console.error(
              "Auth State Error:",
              error
            );

            if (user) {
              setCurrentUser(user);

              setUserData({
                uid: user.uid,
                name:
                  user.displayName ||
                  "",
                email:
                  user.email || "",
                phone: "",
                photoURL:
                  user.photoURL ||
                  "",
                role: "client",
                company: "",
                address: "",
                bio: "",
              });
            } else {
              setCurrentUser(null);
              setUserData(null);
            }
          } finally {
            setLoading(false);
          }
        }
      );

    return () => unsubscribe();
  }, []);
    // ===========================
  // Context Value
  // ===========================

  const value = {
    // Current User
    currentUser,

    // Firestore User Data
    userData,

    // Loading State
    loading,

    // Authentication
    register,
    login,
    googleLogin,
    logout,

    // Password
    forgotPassword,
    changePassword,

    // Profile
    updateUserProfile,
  };

  // ===========================
  // Provider
  // ===========================

return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);
}