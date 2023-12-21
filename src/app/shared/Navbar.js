"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "@/app/assets/images/logo.png";
import NavLink from "./NavLink";

const Navbar = () => {
  const [mobileSideBar, setMobileSidebar] = useState(false);
  return (
    <div className="fixed w-full top-0 bg-darkBg z-20">
      <div className=" container px-4 mx-auto w-full h-[75px] md:h-[100px]   flex items-center justify-between">
        <div>
          <Image
            src={Logo}
            alt="navbar-logo"
            className="w-[128px] h-[30px]"
            loading="lazy"
          />
        </div>
        <div className=" items-center hidden md:flex">
          <NavLink href={"/"}>Home </NavLink>
          <NavLink href={"#"}>Services </NavLink>
          <NavLink href={"#"}>Portfolio </NavLink>
          <NavLink href={"#"}>About Us </NavLink>
          <NavLink href={"#"}>Blog </NavLink>
          <NavLink href={"#"}>Contact </NavLink>
        </div>
        <div className="block md:hidden">
          <AiOutlineMenu
            size={30}
            className="cursor-pointer text-white"
            onClick={() => setMobileSidebar(!mobileSideBar)}
          />
        </div>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`mobile-sidebar block md:hidden ${
          mobileSideBar ? "menu-active fixed " : ""
        }`}
      >
        <AiOutlineClose
          size={30}
          className="absolute top-4 cursor-pointer text-white right-3"
          onClick={() => setMobileSidebar(false)}
        />
        <div className="flex items-center px-6 py-4 ">
          <Image
            src={Logo}
            alt="navbar-logo"
            className="w-[128px] h-[30px]"
            loading="lazy"
          />
        </div>
        <div className="py-4 px-6 ">
          <NavLink href={"/"} onClick={() => setMobileSidebar(!mobileSideBar)}>
            Home
          </NavLink>
          <NavLink href={"#"} onClick={() => setMobileSidebar(!mobileSideBar)}>
            Services
          </NavLink>
          <NavLink href={"#"} onClick={() => setMobileSidebar(!mobileSideBar)}>
            Portfolio
          </NavLink>
          <NavLink href={"#"} onClick={() => setMobileSidebar(!mobileSideBar)}>
            About Us
          </NavLink>
          <NavLink href={"#"} onClick={() => setMobileSidebar(!mobileSideBar)}>
            Blog
          </NavLink>
          <NavLink href={"#"} onClick={() => setMobileSidebar(!mobileSideBar)}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
