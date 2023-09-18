/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import initializeAuthentication from '@/firebase/firebase.init';
import { useAuthActions } from '@/redux/features/auth/user.actions';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const { setUser, setLoading, setAuthError, login, logout } = useAuthActions();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user?.email || '',
          displayName: user?.displayName || '',
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth]);

  const signInWithGoogle = (location: any, navigate: any) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
        const destination = location?.state?.from || '/';
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (
    email: any,
    password: any,
    name: any,
    navigate: any
  ) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, password, 'POST');
        // updateProfile(auth.currentUser, {
        //   displayName: name,
        // });
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            //
          })
          .catch((updateProfileError) => {
            // error;
            console.error('Error updating user profile:', updateProfileError);
          });
        login(true);
        navigate('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (
    email: any,
    password: any,
    location: any,
    navigate: any
  ) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      .then(() => {
        const destination = location?.state?.from || '/';
        login(true);
        navigate(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user?.email || '',
          displayName: user?.displayName || '',
        });
        login(true);
      } else {
        // setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    logout();
    signOut(auth)
      .then()
      .finally(() => setIsLoading(false));
  };

  const saveUser = (
    email: any,
    displayName: any,
    password: any,
    method: any
  ) => {
    const user = { email, displayName, password };
    fetch('https://eb-ooks-backend.vercel.app/api/v1/auth/signup', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    signInWithGoogle,
    logOut,
    isLoading,
    error,
    setError,
    loginUser,
    registerUser,
  };
};

export default useFirebase;
