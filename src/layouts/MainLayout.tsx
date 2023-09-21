import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="bg-[#e1dcc5]">
      <Navbar />
      <div className="pt-16 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
