
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    
    const providerLogin = (googleProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = (githubProvider) =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log("inside auth state change", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }

    }, [])

    const authDetails = {
        providerLogin,
        createUser,
        updateUserProfile,
        loading,
        setLoading,
        user,
        logOut,
        signIn,
        githubLogin
    };
    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;