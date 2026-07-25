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
    const provider =
      new GoogleAuthProvider();

    const result =
      await signInWithPopup(
        auth,
        provider
      );

    const userRef = doc(
      db,
      "users",
      result.user.uid
    );

    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: result.user.uid,
        name:
          result.user.displayName || "",
        email:
          result.user.email || "",
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
    sendPasswordResetEmail(
      auth,
      email
    );

  // ===========================
  // Change Password
  // ===========================

  const changePassword = async (
    currentPassword,
    newPassword
  ) => {
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
  // Update Profile
  // ===========================

  const updateUserProfile = async (data) => {
    if (!currentUser) {
      throw new Error("User not logged in");
    }

    if (data.name) {
      await updateProfile(currentUser, {
        displayName: data.name,
      });
    }

    await updateDoc(
      doc(db, "users", currentUser.uid),
      {
        ...data,
      }
    );

    setUserData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // ===========================
  // Auth State Listener
  // ===========================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
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

          const userSnap = await getDoc(
            userRef
          );

          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            // Create document automatically
            const newUser = {
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
              createdAt: serverTimestamp(),
            };

            await setDoc(
              userRef,
              newUser
            );

            setUserData(newUser);
          }
        } catch (error) {
          console.error(
            "Auth Error:",
            error
          );

          // Prevent app crash if Firestore is unavailable
          if (user) {
            setCurrentUser(user);

            setUserData({
              uid: user.uid,
              name:
                user.displayName || "",
              email:
                user.email || "",
              phone: "",
              photoURL:
                user.photoURL || "",
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
          // IMPORTANT:
          // Always stop loading.
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
  // Provider
  // ===========================

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}