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
  // const [authError, setAuthError] = useState('');
  // const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // const [admin, setAdmin] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const { setUser, setLoading, setAuthError, setAdmin, login, logout } =
    useAuthActions();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user?.email,
          displayName: user?.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth]);

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
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

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser({ newUser });
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

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
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
          email: user?.email,
          displayName: user?.displayName,
        });
        login(true);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    logout();
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, password, method) => {
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
    // admin,
  };
};

export default useFirebase;
