/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import useFirebase from '@/hook/useFirebase';

const Login = () => {
  const { signInWithGoogle, loginUser } = useFirebase();

  const location = useLocation();
  const navigate = useNavigate();

  interface LoginData {
    username: string;
    password: string;
  }

  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name as keyof LoginData;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (data: any) => {
    loginUser(data.email, data.password, location, navigate);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div>
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
                ----------- or Sign in with Email -----------
              </p>
              <form
                className="col-start-2 "
                onSubmit={handleSubmit(handleLoginSubmit)}
              >
                <input
                  {...register('email')}
                  type="text"
                  placeholder="Your Email"
                  onChange={handleOnChange}
                  className="mb-5 input input-bordered input-md w-full max-w-xs"
                />
                <br />

                <input
                  {...register('password')}
                  type="text"
                  onChange={handleOnChange}
                  placeholder="Your Password"
                  className="input input-bordered mb-5 input-md w-full max-w-xs"
                />
                <br />
                <button
                  type="submit"
                  className="font-bold text-lg mb-5 btn-primary w-full max-w-xs h-10 rounded-xl "
                >
                  Login
                </button>
                <p className="">
                  Not registered yet?{' '}
                  <Link
                    to="/signup"
                    className="text-blue-700 hover:cursor-pointer"
                  >
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
