import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const navLinks = [
  { name: "Home", navPath: "/" },
  { name: "Gallery", navPath: "/" },
  { name: "Features", navPath: "/" },
  { name: "Reviews", navPath: "/" },
  { name: "Shop", navPath: "/" },
];

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsClosing(false);
        setIsToggleMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isToggleMenu) {
      setIsClosing(true);
      setTimeout(() => {
        setIsToggleMenu(false);
        setIsClosing(false);
      }, 500); // Match this duration with the CSS transition duration
    } else {
      setIsToggleMenu(true);
    }
  };

  return (
    <header className="w-full fixed top-0 right-0 transition-all duration-300 ease-in-out">
      <nav
        className={`z-20 ${
          isSticky
            ? "shadow-xl transition-all duration-300 ease-out py-5 px-8"
            : "bg-secondary_color transition-all duration-300 ease-out p-8"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1
            className={`font-bold text-3xl uppercase ${
              isSticky ? "text-secondary_color" : "text-text_white"
            }`}
          >
            <Link to="/">
              AK <span className="text-primary_color">.</span> Rasel
            </Link>
          </h1>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((navItem, index) => (
                <li
                  key={index}
                  className={`text-sm font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
                    isSticky ? "text-secondary_color" : "text-text_white"
                  }`}
                >
                  <Link to={navItem.navPath}>{navItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:gap-10">
            <span className="lg:hidden">
              <button onClick={toggleMenu}>
                {isToggleMenu ? (
                  <RiCloseLargeFill
                    className={`text-2xl text-[#A07EB5] menu-icon ${
                      isToggleMenu ? "open" : ""
                    }`}
                  />
                ) : (
                  <SlMenu
                    className={`text-2xl text-[#A07EB5] menu-icon ${
                      isToggleMenu ? "open" : ""
                    }`}
                  />
                )}
              </button>
            </span>
            <div className="relative pl-4">
              <div className="bg-primary_color w-5 h-5 flex justify-center items-center p-1 rounded-lg absolute -top-2 -right-2 text-text_white font-bold text-sm">
                0
              </div>
              <PiShoppingCart className="text-2xl font-bold text-[#A07EB5]" />
            </div>
            <button className="hidden lg:block btn bg-primary_color px-8 hover:bg-primary_hover_color hover:duration-200 hover:transition-all text-white py-4 text-sm font-bold uppercase rounded-full">
              Login
            </button>
          </div>
        </div>
      </nav>
      <nav
        className={`lg:hidden block mobile-nav ${isToggleMenu ? "open" : ""} ${
          isClosing ? "closing" : ""
        }`}
      >
        {isToggleMenu && (
          <ul className="flex flex-col bg-secondary_color h-[489px] transition-all duration-300 ease-in-out">
            <div className="px-4">
              {navLinks.map((navItem, index) => (
                <li
                  key={index}
                  className="text-sm font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] text-white py-2"
                >
                  <Link to={navItem.navPath}>{navItem.name}</Link>
                  <div className="w-full my-3 border-secondary_background_color border-t-2"></div>
                </li>
              ))}
            </div>
            <div className="ml-4">
              <button className="btn bg-primary_color px-8 hover:bg-primary_hover_color hover:duration-200 hover:transition-all my-[30px] text-white py-4 text-sm font-bold uppercase rounded-full">
                Login
              </button>
            </div>
            <span className="flex items-center px-5">
              <input
                type="text"
                className="w-full h-16 placeholder:italic bg-secondary_color text-text_hover_color font-extrabold text-3xl"
                placeholder="Search Now..."
              />
              <button>
                <FaSearch className="text-2xl text-text_hover_color" />
              </button>
            </span>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
