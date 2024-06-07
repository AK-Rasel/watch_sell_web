// Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { PiShoppingCart } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const navLinks = [
  { name: "Home", navPath: "/" },
  { name: "Gallery", navPath: "/" },
  { name: "Features", navPath: "/" },
  { name: "Reviews", navPath: "/" },
  { name: "Shop", navPath: "/shop" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSticky, setSticky] = useState(false);
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
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
    setCurrentPath(location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    if (isToggleMenu) {
      setIsClosing(true);
      setTimeout(() => {
        // window.scrollTo({ top: 0, behavior: "smooth" });
        setIsToggleMenu(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsToggleMenu(true);
    }
  };

  const topScroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top;
        window.scrollTo({
          top: offsetTop + window.scrollY,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".smooth-scroll");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  const handleNavigation = (event, path, sectionId) => {
    event.preventDefault();
    if (currentPath === "/") {
      const targetSection = document.querySelector(sectionId);
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top;
        window.scrollTo({
          top: offsetTop + window.scrollY,
          behavior: "smooth",
        });
      }
    } else {
      navigate(path, { state: { sectionId } });
    }
    toggleMenu();
  };

  useEffect(() => {
    if (location.state?.sectionId) {
      const sectionId = location.state.sectionId;
      const targetSection = document.querySelector(sectionId);
      if (targetSection) {
        const offsetTop = targetSection.getBoundingClientRect().top;
        window.scrollTo({
          top: offsetTop + window.scrollY,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const nave = (
    <>
      <li
        className={`text-base font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
          isSticky
            ? "text-secondary_color"
            : currentPath === "/shop"
            ? "text-secondary_background_color"
            : "text-text_white"
        }`}
      >
        <a
          className="smooth-scroll"
          href="#home"
          onClick={(e) => handleNavigation(e, "/", "#home")}
        >
          Home
        </a>
      </li>
      <li
        className={`text-base font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
          isSticky
            ? "text-secondary_color"
            : currentPath === "/shop"
            ? "text-secondary_background_color"
            : "text-text_white"
        }`}
      >
        <a
          className="smooth-scroll"
          href="#gallery"
          onClick={(e) => handleNavigation(e, "/", "#gallery")}
        >
          Gallery
        </a>
      </li>
      <li
        className={`text-base font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
          isSticky
            ? "text-secondary_color"
            : currentPath === "/shop"
            ? "text-secondary_background_color"
            : "text-text_white"
        }`}
      >
        <a
          className="smooth-scroll"
          href="#features"
          onClick={(e) => handleNavigation(e, "/", "#features")}
        >
          Features
        </a>
      </li>
      <li
        className={`text-base font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
          isSticky
            ? "text-secondary_color"
            : currentPath === "/shop"
            ? "text-secondary_background_color"
            : "text-text_white"
        }`}
      >
        <a
          className="smooth-scroll"
          href="#reviews"
          onClick={(e) => handleNavigation(e, "/", "#reviews")}
        >
          Reviews
        </a>
      </li>
      <li
        className={`text-base font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
          isSticky
            ? "text-secondary_color"
            : currentPath === "/shop"
            ? "text-secondary_background_color"
            : "text-text_white"
        }`}
      >
        <Link onClick={topScroll} to="/shop">
          Shop
        </Link>
      </li>
    </>
  );

  return (
    <header className="w-full fixed top-0 right-0 z-50">
      <nav
        className={` ${
          isSticky
            ? "shadow-xl transition-all duration-300 ease-out py-5 px-8 bg-white"
            : "bg-transparent px-8 pt-10"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1
            className={`font-bold text-3xl uppercase ${
              isSticky
                ? "text-secondary_color"
                : currentPath === "/shop"
                ? "text-secondary_background_color"
                : "text-text_white"
            }`}
          >
            <Link to="/">
              AK <span className="text-primary_color">.</span> Rasel
            </Link>
          </h1>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">{nave}</ul>
          </div>
          <div className="flex items-center justify-center lg:gap-10">
            <span className="lg:hidden">
              <button onClick={toggleMenu}>
                {isToggleMenu ? (
                  <RiCloseFill
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
      {/* mobile nav */}
      <nav
        className={`lg:hidden block mobile-nav ${isToggleMenu ? "open" : ""} ${
          isClosing ? "closing" : ""
        }`}
      >
        {isToggleMenu && (
          <ul className="flex flex-col bg-secondary_color h-[600px] transition-all duration-300 ease-in-out">
            <div className="px-4 pt-4">
              {navLinks.map((navItem, index) => (
                <li
                  key={index}
                  className="text-sm font-normal hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] text-white py-2"
                >
                  <Link
                    onClick={(e) =>
                      navItem.name.toLowerCase() === "shop"
                        ? toggleMenu()
                        : handleNavigation(
                            e,
                            "/",
                            `#${navItem.name.toLowerCase()}`
                          )
                    }
                    to={navItem.navPath}
                  >
                    {navItem.name}
                  </Link>
                  {navItem.name === "Shop" ? (
                    ""
                  ) : (
                    <div className="w-full my-3 border-secondary_background_color border-t-2"></div>
                  )}
                </li>
              ))}
            </div>
            <div className="ml-4">
              <button className="btn bg-primary_color px-8 hover:bg-primary_hover_color hover:duration-200 hover:transition-all my-[42px] text-white py-4 text-sm font-bold uppercase rounded-full">
                Login
              </button>
            </div>
            <span className="flex items-center px-5">
              <input
                type="text"
                className="w-full h-16 placeholder:italic border-none outline-none bg-secondary_color text-text_hover_color font-extrabold text-3xl pb-2"
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
