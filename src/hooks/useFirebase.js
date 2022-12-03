import { useEffect, useState } from 'react';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   updateProfile,
} from 'firebase/auth';
import initializeFirebase from '../firebase/firebase.config';

//? initializing firebase app
initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [userLoading, setUserLoading] = useState(true);
   const [authError, setAuthError] = useState('');

   const auth = getAuth();

   //@ REGISTER WITH EMAIL AND PASS
   const registerWithEmailAndPassword = async (
      userName,
      email,
      password,
      navigate
   ) => {
      try {
         setUserLoading(true);
         setAuthError('');

         console.log({userName, email, password})

         // register user
         await createUserWithEmailAndPassword(auth, email, password);
         // update user profile
         await updateProfile(auth.currentUser, {
            displayName: userName,
         });

         // redirect to home page
         navigate('/');
      } catch (error) {
         setAuthError(error.message);
      } finally {
         setUserLoading(false);
      }
   };

   //@ SIGN IN  WITH EMAIL AND PASS
   const loginWithEmailAndPassword = async (
      email,
      password,
      location,
      navigate
   ) => {
      try {
         setUserLoading(true);
         await signInWithEmailAndPassword(auth, email, password);
         setAuthError('');
         location?.state?.from
            ? navigate(location.state.from.pathname)
            : navigate('/');
      } catch (error) {
         if (error.message.includes('auth/user-not-found')) {
            setAuthError('No user found with this email 😟');
         } else if (error.message.includes('auth/wrong-password')) {
            setAuthError('Wrong password 😟');
         } else {
            setAuthError(error.message);
         }
      } finally {
         setUserLoading(false);
      }
   };

   //@ LOGOUT USER
   const logoutUser = () => {
      signOut(auth).then(() => {
         console.log('User Logged Out');
      });
   };

   //@ OBSERVING AUTH STATE CHANGES
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser(null);
         }
         setUserLoading(false);
      });

      return () => unSubscribe;
   }, [auth]);

   return {
      user,
      userLoading,
      authError,
      registerWithEmailAndPassword,
      loginWithEmailAndPassword,
      logoutUser,
   };
};

export default useFirebase;
