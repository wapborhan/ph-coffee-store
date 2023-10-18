import { createContext } from "react";
import auth from "../firebase/FirebaseInit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const AuthInfo = { createUser };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
