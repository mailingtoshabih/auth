import { createContext, useContext } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from 'firebase/auth'

import {auth} from '../firebase';







const Usercontext = createContext();

export const AuthContextProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    return (
        <Usercontext.Provider value={{createUser}}>
            {children}
        </Usercontext.Provider>
    )
}

 


export const UserAuth = () => {
    return useContext(Usercontext);
}
