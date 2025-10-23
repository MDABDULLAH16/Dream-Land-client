import { useState, useContext } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router";
import { IoClose, IoMenu } from "react-icons/io5";
 
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { SyncLoader } from "react-spinners";
import userProfile from "/profile.png";
import Container from "../Container/Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOutUser, loading } = useContext(AuthContext);
  console.log(user);
  

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="block py-2 pl-3 pr-4 border-b border-transparent lg:border-0 lg:p-0 text-neutral hover:text-white transition-colors"
      >
        Home
      </NavLink>

      <NavLink
        to="/myProfile"
        className="block py-2 pl-3 pr-4 border-b border-transparent lg:border-0 lg:p-0 text-neutral hover:text-white transition-colors"
      >
        My Profile
      </NavLink>
    </>
  );

  return (
    <nav className="bg-primary py-2.5">
      <Container>
        <div className="flex flex-wrap items-center justify-between max-w-7xl px-4 mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
            <span className="self-center text-3xl  text-secondary font-semibold whitespace-nowrap  ">
              DreamLand
            </span>
          </Link>

          {/* Right Side Buttons */}
          <div className="flex items-center lg:order-2">
            {loading ? (
              <SyncLoader color="#FF6B6B" />
            ) : user ? (
              <>
                <img
                  src={user.photoURL ? user.photoURL : userProfile}
                  height={40}
                  width={40}
                  alt="User"
                  className="rounded-full object-cover mr-3 border-2 border-accent"
                />

                <button
                  onClick={() => logOutUser()}
                  className="text-base-100 bg-secondary hover:bg-accent focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-colors"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-base-100 bg-secondary hover:bg-accent focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 transition-colors"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-2 text-neutral rounded-lg lg:hidden hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <IoClose className="text-xl" />
              ) : (
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
      </Container>
    </nav>
  );
};

export default Navbar;
