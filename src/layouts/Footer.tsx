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
    <div className=" bg-base-200">
      <footer className="  container footer py-10 bg-base-200 text-base-content grid grid-cols-4">
        <div className="row-span-2">
          <div className="mb-4 ">
            <Link to="/">
              <a className="text-4xl font-semibold">
                <span className="text-red-600 ">E</span>Books
              </a>
            </Link>
          </div>
          <span className="footer-title">Shop By</span>
          <a className="link link-hover">Book Category</a>
          <a className="link link-hover">Boi Mela 2023</a>
          <a className="link link-hover">Islamic Book</a>
          <a className="link link-hover">Pre Order</a>
          <a className="link link-hover">Foreign Books</a>
          <a className="link link-hover">Best Selling</a>
          <a className="link link-hover">Extra Discount</a>
        </div>
        <div className="">
          <span className="footer-title  ">Products</span>
          <a className="link link-hover">Authors</a>
          <a className="link link-hover">publishers</a>
          <a className="link link-hover">List</a>
          <a className="link link-hover">reviews</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Order Track</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Find My Product</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <span className="footer-title">Get to know us</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Site Map</a>
        </div>
        <div>
          <span className="footer-title">Terms of Use</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Happy Return</a>
          <a className="link link-hover">Refund Policy</a>
        </div>
        <div className="   grid grid-cols-1 md:place-self-center md:justify-self-end">
          <div>
            <p className="text-2xl font-medium ">Stay Connected</p>
          </div>
          <br />
          <div className="grid grid-flow-col text-2xl gap-4">
            <BsLinkedin className="hover:scale-110" />
            <BsYoutube className="hover:scale-110" />
            <BsFacebook className="hover:scale-110" />
            <BsInstagram className="hover:scale-110" />
            <BsTwitter className="hover:scale-110" />
          </div>
        </div>
      </footer>
      <footer className=" px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <p className="text-center items-center justify-center">
          © {year} EBooks.com
        </p>
      </footer>
    </div>
  );
};

export default Footer;
