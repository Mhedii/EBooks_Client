import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const Login = () => {
  // const [loginData, setLoginData] = useState({});
  // const { signInWithGoogle, loginUser, isLoading } = useAuth();

  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleOnChange = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newLoginData = { ...loginData };
  //   newLoginData[field] = value;
  //   setLoginData(newLoginData);
  // };
  const handleLoginSubmit = (data) => {
    // loginUser(loginData.email, loginData.password, location, navigate);

    // e.preventDefault();
    console.log(data);
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
                  className="mb-5 input input-bordered input-md w-full max-w-xs"
                />
                <br />

                <input
                  {...register('password')}
                  type="text"
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
              {/* <form onSubmit={handleLoginSubmit}> */}
              {/* <input type="email" className="w-40" onChange={handleOnChange} /> */}
              {/* <TextField
                className="your-email"
                sx={{ width: '40%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                required
              />{' '}
              <br />
              <TextField
                sx={{ width: '40%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                required
              />
              <br />
              <button
                sx={{ width: '50%', m: 1 }}
                type="submit"
                className="login-btn"
              >
                {' '}
                Login{' '}
              </button>
              <p className="create-account">
                Not registered yet?{' '}
                <NavLink to="/register" className="create-new">
                  Create an Account
                </NavLink>
              </p> */}
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
