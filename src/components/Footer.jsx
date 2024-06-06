import React from "react";
const experienceLinks = [
  { name: "FAQ", path: "/" },
  { name: "Shipment", path: "/" },
  { name: "Returns", path: "/" },
  { name: "Gift cards", path: "/" },
  { name: "Policies", path: "/" },
];

const companyLinks = [
  { name: "About us", path: "/" },
  { name: "Press", path: "/" },
  { name: "Offices", path: "/" },
  { name: "Affiliates", path: "/" },
  { name: "Giveaway", path: "/" },
];

import {
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaLock,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { Link } from "react-router-dom";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer className="bg-secondary_background_color w-full mt-4">
      <div className="container mx-auto grid md:grid-cols-2  justify-start gap-20   py-20 px-14">
        {/* logo */}
        <div>
          <h1
            className="font-bold text-3xl uppercase 
               text-text_white"
          >
            <Link to="/">AK . Rasel</Link>
          </h1>
          <p className="text-base  text-[#A1A1A1] mb-11 mt-6">
            Lorem ipsum dolor sit amet, <br /> consectetuer adipiscing elit, sed
            diam.
          </p>
          <div className="flex items-center text-3xl text-text_white  gap-5">
            <FaCcVisa className="hover:text-text_hover_color transition-all duration-300 ease-in-out cursor-pointer " />
            <FaCcMastercard className="hover:text-text_hover_color transition-all duration-300 ease-in-out cursor-pointer" />
            <SiAmericanexpress className="text-2xl hover:text-text_hover_color transition-all duration-300 ease-in-out cursor-pointer rounded-sm " />
            <FaCcPaypal className="hover:text-text_hover_color transition-all duration-300 ease-in-out cursor-pointer" />
            <FaCcJcb className="hover:text-text_hover_color transition-all duration-300 ease-in-out cursor-pointer" />
          </div>
          <p className="text-text_hover_color text-xs mt-5 gap-2 flex">
            <FaLock />
            Secure online payment
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col">
          {/* EXPERIENCE */}
          <div className="w-full mx-auto">
            <h3 className="text-base font-bold text-text_white mb-2">
              BEST EXPERIENCE
            </h3>
            <ul className=" flex  mx-auto flex-col gap-1">
              {experienceLinks.map((linksOfExperience, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="font-Poppins text-base  text-text_hover_color "
                      to={linksOfExperience.path}
                    >
                      {linksOfExperience.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* COMPANY */}
          <div>
            <h3 className="text-base font-bold text-text_white mb-2">
              COMPANY
            </h3>
            <ul className="flex justify-start flex-col gap-1">
              {companyLinks.map((companyLink, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="font-Poppins text-base  text-text_hover_color "
                      to={companyLink.path}
                    >
                      {companyLink.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
};

export default Footer;
