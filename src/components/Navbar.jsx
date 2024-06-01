import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import { RiCloseLargeFill } from "react-icons/ri";
const navLinks = [
  {
    name: "Home",
    navPath: "/",
  },
  {
    name: "Gallery",
    navPath: "/",
  },
  {
    name: "Features",
    navPath: "/",
  },
  {
    name: "Reviews",
    navPath: "/",
  },
  {
    name: "Shop",
    navPath: "/",
  },
];
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  // scroll
  useEffect(() => {
    const scrollHandler = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.addEventListener("scroll", scrollHandler);
    };
  }, []);
  // menu
  const toggleMenu = () => {
    setIsToggleMenu((prevState) => !prevState);
  };
  console.log(isToggleMenu);
  return (
    <header className="w-full  fixed top-0 right-0 transition-all duration-300 ease-in-out ">
      <nav
        className={`z-20  ${
          isSticky
            ? "shadow-xl transition-all duration-300 ease-out py-5 px-8 "
            : "bg-secondary_color transition-all duration-300 ease-out p-8 "
        }`}
      >
        <div className="flex justify-between  items-center">
          {/* logo */}
          <h1
            className={`font-bold text-3xl uppercase ${
              isSticky ? "text-secondary_color" : "text-text_white"
            }`}
          >
            <Link to="/">
              AK <span className="text-primary_color">.</span> Rasel
            </Link>
          </h1>
          {/* desktop nav */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks?.map((navItem, index) => {
                return (
                  <li
                    key={index}
                    className={`text-sm  font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
                      isSticky ? "text-secondary_color" : "text-text_white"
                    }`}
                  >
                    <Link to={navItem.navPath}>{navItem.name}</Link>
                  </li>
                );
              })}
              {/* cart btn */}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:gap-10">
            {/* burger Menu  */}
            <span className="lg:hidden">
              {isToggleMenu ? (
                <button onClick={toggleMenu}>
                  <RiCloseLargeFill className="text-2xl text-[#A07EB5]" />
                </button>
              ) : (
                <button onClick={toggleMenu}>
                  <SlMenu className="text-2xl text-[#A07EB5]" />
                </button>
              )}
            </span>

            {/* carts */}
            <div className="relative pl-4">
              <div className="bg-primary_color w-5 h-5  flex justify-center items-center p-1 rounded-lg absolute -top-2 -right-2 text-text_white font-bold text-sm">
                0
              </div>
              <PiShoppingCart className="text-2xl font-bold text-[#A07EB5] " />
            </div>
            <button className="hidden lg:block  btn bg-primary_color px-8 hover:bg-primary_hover_color hover:duration-200 hover:transition-all text-white py-4 text-sm font-bold uppercase rounded-full">
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
