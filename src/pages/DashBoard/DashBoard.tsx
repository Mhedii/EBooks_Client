import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import AddBook from './Books/AddBook';
const DashBoard = () => {
  return (
    <div className="h-screen">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full ">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <HiOutlineMenuAlt1 className="text-3xl   hover:border hover:bg-slate-300 hover:rounded hover:cursor-pointer ml-5  " />
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"></div>
            <div className="flex-none hidden lg:block">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <HiOutlineMenuAlt1 className="text-3xl   hover:border hover:bg-slate-300 hover:rounded hover:cursor-pointer ml-5  " />
              </label>
            </div>
          </div>
          <AddBook />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            <li>
              <Link to="/dashboard">Add Book</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
