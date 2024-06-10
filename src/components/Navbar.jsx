// Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { PiShoppingCart } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import useCarts from "../hooks/useCarts";
import { AiOutlineClose } from "react-icons/ai";
import useAxiosPublic from "../hooks/useAxiosPublic";
const navLinks = [
  { name: "Home", navPath: "/", sectionId: "#home" },
  { name: "Gallery", navPath: "/", sectionId: "#gallery" },
  { name: "Features", navPath: "/", sectionId: "#features" },
  { name: "Reviews", navPath: "/", sectionId: "#reviews" },
  { name: "Shop", navPath: "/shop", sectionId: null },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [allCarts, refetch, isLoading] = useCarts();
  const axiosPublic = useAxiosPublic();

  const [isHovered, setIsHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const [isToggled, setIsToggled] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  // remove local stor---smart
  useEffect(() => {
    const handleRouteChange = () => {
      if (currentPath === "/") {
        localStorage.removeItem("sortOrder");
      }
    };

    handleRouteChange(); // check initially
    return () => handleRouteChange(); // clean up when the component unmounts
  }, [currentPath]);
  // remove local stor---end

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

  const navLinksJSX = navLinks.map((navItem, index) => (
    <li
      key={index}
      className={`text-base font-bold hover:duration-300 hover:underline transition-all antialiased hover:text-[#828282] ${
        isSticky
          ? "text-secondary_color"
          : currentPath === "/shop"
          ? "text-secondary_background_color"
          : currentPath === "/cart"
          ? "text-secondary_background_color"
          : "text-text_white"
      }`}
    >
      {navItem.name === "Shop" ? (
        <Link onClick={topScroll} to={navItem.navPath}>
          {navItem.name}
        </Link>
      ) : (
        <a
          className="smooth-scroll"
          href={navItem.sectionId}
          onClick={(e) =>
            handleNavigation(e, navItem.navPath, navItem.sectionId)
          }
        >
          {navItem.name}
        </a>
      )}
    </li>
  ));

  const lengthCarts = Array.isArray(allCarts)
    ? allCarts.reduce((acc, cart) => {
        return acc + (cart.quantity || 0);
      }, 0)
    : 0;
  const totalPrice = Array.isArray(allCarts)
    ? allCarts.reduce((acc, cart) => acc + cart.price * (cart.quantity || 0), 0)
    : 0;

  const handleMouseEnter = () => {
    // console.log(location.pathname);

    if (location.pathname === "/cart") {
      setIsHovered(false);
    } else {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMenuMouseEnter = () => {
    if (location.pathname === "/cart") {
      setIsMenuHovered(false);
    } else {
      setIsMenuHovered(true);
    }
  };

  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axiosPublic.delete(`/cart/${id}`);
      refetch();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(currentPath);
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
                : currentPath === "/cart"
                ? "text-secondary_background_color"
                : "text-text_white"
            }`}
          >
            <Link to="/">
              AK <span className="text-primary_color">.</span> Rasel
            </Link>
          </h1>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">{navLinksJSX}</ul>
          </div>
          <div className="flex items-center justify-center lg:gap-10">
            <span className="lg:hidden mr-4">
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
            {/* cart for quantity ----------------------*/}
            <div className="relative pb-6">
              <Link
                to="/cart"
                className="relative w-full pl-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={topScroll}
              >
                <div className="bg-primary_color group h-5 flex justify-center items-center p-1 rounded-lg absolute top-3 -right-2 text-text_white font-bold text-sm">
                  {lengthCarts}
                </div>
                <PiShoppingCart
                  className={`text-2xl font-bold text-[#A07EB5] cart-icon ${
                    isHovered ? "open" : ""
                  }`}
                />
              </Link>
              <div
                className={`absolute top-0 right-0 mt-12 bg-[#232323] shadow-lg rounded mobile-nav ${
                  isHovered || isMenuHovered ? "open" : ""
                }`}
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
              >
                <div className="w-96 ">
                  <>
                    {lengthCarts === 0 ? (
                      <p className="p-4  text-text_hover_color">
                        No products in the cart
                      </p>
                    ) : (
                      <div>
                        {allCarts.map((cart, index) => (
                          <div className="flex p-4 " key={cart._id}>
                            <div className="flex-shrink-0 w-16 h-12">
                              <img className="w-full" src={cart.img} alt="" />
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="text-xl font-bold text-text_white">
                                {cart.colorName}
                              </p>
                              <p className="mt-1 text-lg text-gray-500">
                                {cart.quantity} x
                                <span className="font-bold text-primary_color">
                                  {" $" + cart.price}
                                </span>
                              </p>
                            </div>
                            {/* cancel-------------------------------- */}
                            <div
                              onClick={() => handleDelete(cart._id)}
                              className="flex items-center"
                            >
                              <button className="w-full border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-text_white">
                                <AiOutlineClose className="text-xl" />
                              </button>
                            </div>
                            {/* --------------------------------------------- */}
                          </div>
                        ))}
                        <div className="w-full text-center border-t border-gray-600 mt-4 ">
                          <p className="text-lg text-text_white py-4">
                            SUBTOTAL: $ {totalPrice.toFixed(2)}
                          </p>
                          <div className="flex  text-text_white font-medium text-lg items-center pt-4">
                            <Link
                              to="/cart"
                              onClick={topScroll}
                              className="w-1/2 mx-auto text-center py-4  border-t border-gray-600 border-r"
                            >
                              View Cart
                            </Link>
                            <button className="w-1/2 mx-auto text-center  border-t border-gray-600 py-4">
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </div>
            {/* ---------------- */}
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
                      navItem.name === "Shop"
                        ? toggleMenu()
                        : handleNavigation(
                            e,
                            navItem.navPath,
                            navItem.sectionId
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
