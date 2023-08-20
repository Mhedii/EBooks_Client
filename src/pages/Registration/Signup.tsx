import useFirebase from '@/hook/useFirebase';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [signUpData, setSignUpData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // const { user, registerUser, isLoading, authError, signInWithGoogle } =
  //   useAuth();
  const { registerUser, signInWithGoogle } = useFirebase();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignUpData = { ...signUpData, signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  };

  const handleSignUp = (data) => {
    // event.preventDefault();

    if (data.password !== data.confirmPassword) {
      return;
    }
    try {
      registerUser(data.email, data.password, data.name, navigate);
    } catch (error) {
      console.log('hoini');
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  const { register, handleSubmit } = useForm();
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
                {...register('name')}
                type="text"
                placeholder="Your Name"
                className="mb-5 input input-bordered input-md w-full max-w-xs"
              />
              <br />
              <input
                {...register('email')}
                type="text"
                placeholder="Your Email"
                className="mb-5 input input-bordered input-md w-full max-w-xs"
              />
              <br />

              <input
                {...register('password')}
                type="text"
                placeholder="Your Password"
                className="input input-bordered mb-5 input-md w-full max-w-xs"
                onBlur={handleOnBlur}
              />
              <br />
              <input
                {...register('confirmPassword')}
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
