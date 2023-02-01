import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';
import app from '../firebase.init';

// const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const signInWithGoogle = () => {
    signInWithPopup(auth, )
      .then(result => {
        const user = result.user;

        setUser(user);
        console.log(user);
        if (user) {
          Navigate('/');
        }
      })
      .catch(error => {
        console.log(error.user);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
    .then(() => { });
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  });

  return {
    user,
 
    handleSignOut,
    signInWithGoogle,
  };
};

export default useFirebase;
