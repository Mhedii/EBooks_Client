import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" bg-[#e1dcc5] mt-10">
      <footer className="  container footer py-10 bg-[#e1dcc5] text-base-content grid grid-cols-4">
        <div className="row-span-2">
          <div className="mb-4 ">
            <Link to="/" className="text-4xl font-semibold">
              <span className="text-red-600 ">E</span>Books
            </Link>
          </div>
          <span className="footer-title">Shop By</span>
          <Link to="" className="link link-hover">
            Book Category
          </Link>
          <Link to="" className="link link-hover">
            Boi Mela 2023
          </Link>
          <Link to="" className="link link-hover">
            Islamic Book
          </Link>
          <Link to="" className="link link-hover">
            Pre Order
          </Link>
          <Link to="" className="link link-hover">
            Foreign Books
          </Link>
          <Link to="" className="link link-hover">
            Best Selling
          </Link>
          <Link to="" className="link link-hover">
            Extra Discount
          </Link>
        </div>
        <div className="">
          <span className="footer-title  ">Products</span>
          <Link to="" className="link link-hover">
            Authors
          </Link>
          <Link to="" className="link link-hover">
            publishers
          </Link>
          <Link to="" className="link link-hover">
            List
          </Link>
          <Link to="" className="link link-hover">
            reviews
          </Link>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <Link to="" className="link link-hover">
            Order Track
          </Link>
          <Link to="" className="link link-hover">
            Contact Us
          </Link>
          <Link to="" className="link link-hover">
            Find My Product
          </Link>
          <Link to="" className="link link-hover">
            FAQ
          </Link>
        </div>
        <div>
          <span className="footer-title">Get to know us</span>
          <Link to="" className="link link-hover">
            About Us
          </Link>
          <Link to="" className="link link-hover">
            Site Map
          </Link>
        </div>
        <div>
          <span className="footer-title">Terms of Use</span>
          <Link to="" className="link link-hover">
            Privacy Policy
          </Link>
          <Link to="" className="link link-hover">
            Happy Return
          </Link>
          <Link to="" className="link link-hover">
            Refund Policy
          </Link>
        </div>
        <div className="   grid grid-cols-1 md:place-self-center md:justify-self-end">
          <div>
            <p className="text-2xl font-medium ">Stay Connected</p>
          </div>
          <br />
          <div className="grid grid-flow-col text-2xl gap-4">
            <BsLinkedin className="hover:scale-110 hover:cursor-pointer" />
            <BsYoutube className="hover:scale-110 hover:cursor-pointer" />
            <BsFacebook className="hover:scale-110 hover:cursor-pointer" />
            <BsInstagram className="hover:scale-110 hover:cursor-pointer" />
            <BsTwitter className="hover:scale-110 hover:cursor-pointer" />
          </div>
        </div>
      </footer>
      <footer className=" px-10 py-4 border-t  text-base-content border-base-300">
        <p className="text-center items-center justify-center">
          © {year} EBooks.com
        </p>
      </footer>
    </div>
  );
};

export default Footer;
