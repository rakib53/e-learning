import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const AuthProvider = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState("");
  const createUserWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const getIt = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      getIt();
    };
  }, []);

  const userSignOut = () => {
    return signOut(auth);
  };

  return (
    <AuthProvider.Provider
      value={{
        user,
        signInWithGoogle,
        createUserWithEmailPass,
        signInWithEmailPass,
        userSignOut,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export default UserContext;
