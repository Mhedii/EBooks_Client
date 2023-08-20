import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const DashBoard = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <HiOutlineMenuAlt1
            htmlFor="my-drawer"
            className="drawer-button text-3xl   hover:border hover:bg-slate-300 hover:rounded hover:cursor-pointer ml-5  "
          />
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label> */}
          s
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Sidebar Item 1</Link>
            </li>
            <li>
              <Link to="/">Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
