import React, { createContext,useState,useEffect} from 'react';
import app from './../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export  const AuthContext= createContext();

const auth=getAuth(app);

const UserContext = ({children}) => {

const [user,setUser]=useState(null);
const [loading,setLoading] = useState(true);


const createUser=(email,password)=>{
  setLoading(true);
return createUserWithEmailAndPassword(auth,email,password);
}

const signIn = (email,password)=>{
  setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const signinWithGoogle =()=>{
  setLoading(true);
  return signInWithPopup(auth,GoogleAuthProvider)
}

const logOut =()=>{
  setLoading(true);
    return signOut(auth);
}

useEffect( () =>{
const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
    console.log('state changed',currentUser);
    setUser(currentUser);
    setLoading(false);
})
return ()=> unsubscribe();
},[])


const authInfo={user,loading,createUser,signIn,logOut,signinWithGoogle};

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default UserContext;