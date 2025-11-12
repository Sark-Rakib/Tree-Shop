import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-5 grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3">Tree Shop</h3>
          <p className="text-gray-300">
            Buy and explore a variety of trees for your home, garden, or office.
            Find fruit, flower, medicinal, indoor, and shade trees all in one
            place.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Categories</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3">Contact</h3>
          <p className="text-gray-300">Email: mdrakibsarkar1@gmail.com</p>
          <p className="text-gray-300">Phone: +8801745762857</p>
          <div className="flex gap-3 mt-3 justify-center md:justify-start">
            <a href="#">
              <FaFacebookF className="hover:text-green-400" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-green-400" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-green-400" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        &copy; 2025 Tree Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
