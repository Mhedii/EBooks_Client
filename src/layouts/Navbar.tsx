import useFirebase from '@/hook/useFirebase';
import { useAppSelector } from '@/redux/hook';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isUser = useAppSelector((state) => state.auth.user);
  const isAuthenticate = useAppSelector((state) => state.auth.isAuthenticated);
  const { logOut } = useFirebase();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="navbar container">
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
              <Link to="/allbooks">All Books</Link>
            </li>
            <li>
              <Link to="/addbook">Add Book</Link>
            </li>
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
              <ul className="p-2">
                <li>
                  <Link to="">Add Book</Link>
                </li>
                <li>
                  <Link to="">Submenu 2</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>

        <Link to="/" className=" text-2xl font-semibold">
          <span className="text-red-600 ">E</span>Books
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/allbooks">All Books</Link>
          </li>
          <li>
            <Link to="/addbook">Add Book</Link>
          </li>
          {/* <li tabIndex={0}>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2">
                <li>
                  <Link to="/dashboard">Add Book</Link>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {/* {!isUser?.email ? ( */}
        {!isAuthenticate ? (
          <>
            <div className="">
              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
            <div className="">
              <Link to="/signup" className="btn">
                Sign Up
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="">
              <Link to="/" className="btn" onClick={handleLogOut}>
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
