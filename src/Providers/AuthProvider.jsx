import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const user = null;
// create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
// sign in method
const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}

    const authInfo = {
        user,
        createUser,
        signIn
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;