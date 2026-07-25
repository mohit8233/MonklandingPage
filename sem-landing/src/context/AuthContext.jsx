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
  setDoc,
  updateDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth } from "../firebase/firebase";
import db from "../firebase/firestore";

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
    const result =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    await updateProfile(result.user, {
      displayName: fullName,
    });

    await setDoc(doc(db, "users", result.user.uid), {
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

    return result;
  };

  // ===========================
  // Login
  // ===========================
  const login = (email, password) =>
    signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  // ===========================
  // Google Login
  // ===========================
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    const result =
      await signInWithPopup(auth, provider);

    const userRef = doc(
      db,
      "users",
      result.user.uid
    );

    try {
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: result.user.uid,
          name: result.user.displayName || "",
          email: result.user.email || "",
          phone: "",
          photoURL:
            result.user.photoURL || "",
          role: "client",
          company: "",
          address: "",
          bio: "",
          createdAt: serverTimestamp(),
        });
      }
    } catch (error) {
      console.warn(
        "Firestore unavailable:",
        error.message
      );
    }

    return result;
  };

  // ===========================
  // Logout
  // ===========================
  const logout = () => signOut(auth);

  // ===========================
  // Forgot Password
  // ===========================
  const forgotPassword = (email) =>
    sendPasswordResetEmail(auth, email);

  // ===========================
  // Change Password
  // ===========================
  const changePassword = async (
    currentPassword,
    newPassword
  ) => {
    if (!auth.currentUser) {
      throw new Error("No user logged in");
    }

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
  };
    // ===========================
  // Update User Profile
  // ===========================
  const updateUserProfile = async (data) => {
    if (!currentUser) {
      throw new Error("User not logged in");
    }

    try {
      // Update Firebase Auth Profile
      if (data.name) {
        await updateProfile(currentUser, {
          displayName: data.name,
        });
      }

      // Update Firestore
      await updateDoc(
        doc(db, "users", currentUser.uid),
        {
          ...data,
        }
      );

      // Update Local State
      setUserData((prev) => ({
        ...prev,
        ...data,
      }));
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
    setLoading(true);

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          setCurrentUser(null);
          setUserData(null);
          setLoading(false);
          return;
        }

        setCurrentUser(user);

        try {
          const userRef = doc(
            db,
            "users",
            user.uid
          );

          const userSnap = await getDoc(
            userRef
          );

          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            // User exists in Auth but not Firestore
            setUserData({
              uid: user.uid,
              name:
                user.displayName || "",
              email: user.email || "",
              phone: "",
              photoURL:
                user.photoURL || "",
              role: "client",
              company: "",
              address: "",
              bio: "",
            });
          }
        } catch (error) {
          console.error(
            "Firestore Error:",
            error
          );

          // Offline fallback
          setUserData({
            uid: user.uid,
            name:
              user.displayName || "",
            email: user.email || "",
            phone: "",
            photoURL:
              user.photoURL || "",
            role: "client",
            company: "",
            address: "",
            bio: "",
          });
        } finally {
          setLoading(false);
        }
      }
    );

    return unsubscribe;
  }, []);
    // ===========================
  // Context Value
  // ===========================
  const value = {
    currentUser,
    userData,
    loading,

    register,
    login,
    googleLogin,
    logout,

    forgotPassword,
    changePassword,
    updateUserProfile,
  };

  // ===========================
  // Loading Screen
  // ===========================
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      </div>
    );
  }

  // ===========================
  // Provider
  // ===========================
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}