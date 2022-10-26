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
  const [loader, setLoader] = useState(true);

  const createUserWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const getIt = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
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
        loader,
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
