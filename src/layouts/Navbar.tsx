import useFirebase from '@/hook/useFirebase';
import { useAppSelector } from '@/redux/hook';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticate = useAppSelector((state) => state.auth.isAuthenticated);
  const { logOut } = useFirebase();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar container font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allbooks">All Books</Link>
            </li>
            {isAuthenticate ? (
              <li>
                <Link to="/addbook">Add Book</Link>
              </li>
            ) : (
              ''
            )}
            {isAuthenticate ? (
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
            ) : (
              ''
            )}
          </ul>
        </div>

        <Link to="/" className=" text-2xl font-semibold">
          <span className="text-red-600 ">E</span>Books
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allbooks">All Books</Link>
          </li>
          {isAuthenticate ? (
            <li>
              <Link to="/addbook">Add Book</Link>
            </li>
          ) : (
            ''
          )}
          {isAuthenticate ? (
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {/* {!isUser?.email ? ( */}
        {!isAuthenticate ? (
          <>
            <div className="">
              <Link to="/login" className="btn btn-neutral font-bold">
                Login
              </Link>
            </div>
            <div className="">
              <Link to="/signup" className="btn btn-neutral font-bold">
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <Link
                to="/"
                className="btn btn-neutral font-bold"
                onClick={handleLogOut}
              >
                Log out
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
