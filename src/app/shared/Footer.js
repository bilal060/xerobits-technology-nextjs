import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

import Logo from "@/app/assets/images/logo.png";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="w-full bg-black main-layout-container">
      <div className="px-4 container mx-auto lg:px-0 w-full h-full flex flex-col items-start justify-center  ">
        <div className="grid grid-cols-12 w-full mt-8 ">
          <div className="col-span-12 md:col-span-12 lg:col-span-6 3xl:flex 3xl:flex-col 3xl:justify-center ">
            <Image
              src={Logo}
              alt="footer-logo"
              className="w-[184px] h-[42px]"
              loading="lazy"
            />
            <p className="text-lightGray text-[16px] font-tripsans font-normal leading-5 lg:w-[390px] mt-4 lg:mt-8">
              Xero Bit Technology is a leading IT solutions provider dedicated
              to helping businesses innovate and succeed in the digital world.
              Our expert team specialises in product development, digital
              strategy, UX/UI design, content strategy, web design, concept, and
              social media management.
            </p>
            <div className="flex items-center mt-4 lg:mt-8  ">
              <FaFacebookF size={25} className="text-lightGray" />
              <BsLinkedin size={25} className="text-lightGray ml-3" />
              <AiOutlineInstagram size={25} className="text-lightGray ml-3" />
              <BsTwitter size={25} className="text-lightGray ml-3" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4  lg:col-span-2 mt-4 lg:mt-0 ">
            <h3 className="text-[20px] font-bold font-tripsans text-white leading-6 mb-4 md:mb-0">
              Services
            </h3>
            <FooterLink href={"/"}>Digital Strategy</FooterLink>
            <FooterLink href={"/"}>UX Design</FooterLink>
            <FooterLink href={"/"}> Product Design</FooterLink>
            <FooterLink href={"/"}>Content Strategy</FooterLink>
            <FooterLink href={"/"}>Design & Concept</FooterLink>
            <FooterLink href={"/"}>Social Media</FooterLink>
          </div>

          <div className="col-span-12 md:col-span-4 mt-4 lg:mt-0 lg:col-span-2">
            <h3 className="text-[20px] font-bold font-tripsans text-white leading-6 mb-4 md:mb-0">
              Quick Links
            </h3>
            <FooterLink href={"/"}>Services</FooterLink>
            <FooterLink href={"/"}>About Us</FooterLink>
            <FooterLink href={"/"}>Testimonials</FooterLink>
            <FooterLink href={"/"}>Blog</FooterLink>
            <FooterLink href={"/"}>Contact</FooterLink>
          </div>
          <div className="col-span-12 md:col-span-4 mt-4 lg:mt-0 lg:col-span-2">
            <h3 className="text-[20px] font-bold font-tripsans text-white leading-6 mb-4 md:mb-0">
              Services
            </h3>
            <FooterLink href={"/"}>
              <BsTelephoneFill className="text-lightGray mr-2" />
              +1 234 56789
            </FooterLink>
            <FooterLink href={"/"}>
              <MdEmail className="text-lightGray mr-2" />
              yourmail@mail.com
            </FooterLink>
            <FooterLink href={"/"}>
              <ImLocation className="text-lightGray mr-2" />
              Your address goes here
            </FooterLink>
          </div>
        </div>
        <div className="w-full border-t border-t-lightGray flex items-center justify-center">
          <p className="text-[14px] text-lightGray text-center py-3 font-normal font-tripsans">
            Copyright © 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
