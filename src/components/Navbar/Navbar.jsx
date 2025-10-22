import { useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router"; // ✅ fixed import
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ NavLinks with Tailwind styles
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 ${
            isActive
              ? "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 dark:text-white"
              : "text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/myProfile"
        className={({ isActive }) =>
          `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 ${
            isActive
              ? "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 dark:text-white"
              : "text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
          }`
        }
      >
        My Profile
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 ${
            isActive
              ? "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 dark:text-white"
              : "text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
          }`
        }
      >
        Login
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            DreamLand
          </span>
        </Link>

        {/* Right Side Buttons */}
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <a
            href="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Download
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              // Close Icon
              <IoClose className="text-xl"></IoClose>
            ) : (
              // Hamburger Icon
              <IoMenu className="text-xl" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <div
          id="mobile-menu-2"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
