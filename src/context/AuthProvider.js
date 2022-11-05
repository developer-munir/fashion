import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const singupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };
    const singinUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
            .then(() => {
                alert('logout successful');
            })
        .catch(error => console.log(error))
    }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        // console.log(currentUser)
    });
    return () => unsubscribe();
  }, []);
  const userInfo = { singupUser,logOut, user,singinUser };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
