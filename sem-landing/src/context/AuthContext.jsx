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

  // Register
  const register = async ({
    fullName,
    phone,
    email,
    password,
  }) => {
    const result = await createUserWithEmailAndPassword(
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

  // Login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Google Login
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    const ref = doc(db, "users", result.user.uid);

    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        phone: "",
        photoURL: result.user.photoURL,
        role: "client",
        createdAt: serverTimestamp(),
      });
    }

    return result;
  };


  // Logout
const logout = () => signOut(auth);

// Forgot Password
const forgotPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change Password
const changePassword = async (
  currentPassword,
  newPassword
) => {
  if (!auth.currentUser) {
    throw new Error("No user logged in");
  }

  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    currentPassword
  );

  await reauthenticateWithCredential(
    auth.currentUser,
    credential
  );

  await updatePassword(auth.currentUser, newPassword);
};
const updateUserProfile = async (data) => {
  if (!currentUser) throw new Error("User not logged in");

  // Firebase Auth display name update
  if (data.name) {
    await updateProfile(currentUser, {
      displayName: data.name,
    });
  }

  // Firestore update
  await updateDoc(doc(db, "users", currentUser.uid), {
    ...data,
  });

  // Local state update
  setUserData((prev) => ({
    ...prev,
    ...data,
  }));
};
    // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          setCurrentUser(user);

          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            setUserData(null);
          }
        } else {
          setCurrentUser(null);
          setUserData(null);
        }
      } catch (error) {
        console.error("Auth Error:", error);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

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

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
