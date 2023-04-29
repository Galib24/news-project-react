import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    // const user = null;
    const [user,setUser] = useState(null);
// create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
// sign in method
const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut = () =>{
    return signOut(auth);
}




useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
        console.log('logged in user inside auth state observer', loggedUser);
        setUser(loggedUser);
    })
    return ()=>{
        unsubscribe();
    }
}, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;