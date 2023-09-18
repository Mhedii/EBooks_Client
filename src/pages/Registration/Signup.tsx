/* eslint-disable @typescript-eslint/no-explicit-any */
import useFirebase from '@/hook/useFirebase';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  interface signUpData {
    name: string;
    password: string;
  }

  const [signUpData, setSignUpData] = useState<signUpData>({
    name: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { registerUser, loginUser, signInWithGoogle } = useFirebase();

  const handleOnBlur = (e: any) => {
    const field = e.target.name as keyof signUpData;
    const value = e.target.value;
    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  };

  const handleSignUp = async (data: any) => {
    if (
      data.name == '' ||
      data.email == '' ||
      data.password == '' ||
      data.confirmPassword == ''
    ) {
      const emptyFields = [];

      if (data.name === '') {
        emptyFields.push('Name');
      }
      if (data.email === '') {
        emptyFields.push('Email');
      }
      if (data.password === '') {
        emptyFields.push('Password');
      }
      if (data.confirmPassword === '') {
        emptyFields.push('Confirm Password');
      }
      toast(`${emptyFields.join(', ')} is Required`);
    }
    if (data.password !== data.confirmPassword && data.password != '') {
      toast('Passwords does not match');
      return;
    }

    try {
      await registerUser(data.email, data.password, data.name, navigate);
      {
        toast('Signup Succesfully');

        loginUser(data.email, data.password, location, navigate);
        reset();
      }
    } catch (error) {
      console.error('Firebase Authentication Error:', error);
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();
  return (
    <>
      <div className="container text-center  min-h-screen  ">
        <div className="items-center">
          <div className="grid grid-cols-3 lg:text-lg sm:text-xs">
            <button
              className=" lg:mx-14 col-start-2 flex items-center justify-center py-2 btn-primary rounded-xl "
              onClick={handleGoogleSignIn}
            >
              <img
                className="w-10 "
                src="https://i.ibb.co/GJ6gbG1/google-logo-9808.png"
                alt=""
              />
              Google Sign In
            </button>

            <p className="col-start-2 my-4">
              ----------- or Sign up with Email -----------
            </p>
            <form
              className="col-start-2 "
              onSubmit={handleSubmit(handleSignUp)}
            >
              <input
                {...register('name', { required: true })}
                type="text"
                placeholder="Your Name"
                className="mb-5 input input-bordered input-md w-full max-w-xs"
              />

              <br />
              <input
                {...register('email', { required: true })}
                type="text"
                placeholder="Your Email"
                className="mb-5 input input-bordered input-md w-full max-w-xs"
              />
              <br />

              <input
                {...register('password', { required: true })}
                type="text"
                placeholder="Your Password"
                className="input input-bordered mb-5 input-md w-full max-w-xs"
                onBlur={handleOnBlur}
              />
              {/* {errors.password && <p>{errors.password.message}</p>} */}

              <br />
              <input
                {...register('confirmPassword', { required: true })}
                type="text"
                placeholder="Confirm Password"
                className="input input-bordered mb-5 input-md w-full max-w-xs"
                onBlur={handleOnBlur}
              />
              <br />
              <button
                type="submit"
                className="font-bold text-lg mb-5 btn-primary w-full max-w-xs h-10 rounded-xl "
              >
                Sign up
              </button>
              <p className="">
                Have Account?{' '}
                <Link
                  to="/signup"
                  className="text-blue-700 hover:cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </form>

            {/* {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User Created successfully!</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>} */}
            {/* {user?.email ? console.log('object') : console.log('2')} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
