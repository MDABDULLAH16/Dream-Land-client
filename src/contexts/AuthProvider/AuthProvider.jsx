import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { auth } from "./../../firebase/firebase.config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
 

const GoogleProvider =new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
 
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [forgetPassword, setForgetPassword] = useState("");
  const userCreate = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const handleGoogleSignIn = () => {
    setLoading(false)
    return signInWithPopup(auth, GoogleProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
      else {
        setLoading(false)
      }
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    userCreate,
    userLogin,
    logOutUser,
    forgetPassword,
    setForgetPassword,
    user,
    setUser,
    loading,
    handleGoogleSignIn,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
