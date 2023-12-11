import Image from "next/image";
import React, { useEffect } from "react";
import { BsCircleFill } from "react-icons/bs";
import { gsap } from "gsap";
import WHyUsImage from "@/app/assets/images/why-us-img.svg";
import BottomCircle from "@/app/assets/images/bottom-circle.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = ({ createRef }) => {
  // useEffect(() => {
  //   gsap.from(".bottom-circle", {
  //     y: "-100%",
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power4.out",
  //     scrollTrigger: {
  //       trigger: ".bottom-circle",
  //       start: "top 80%",
  //       end: "bottom top", // Adjust the end trigger to ensure it re-triggers when scrolling back up
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // });

  useEffect(() => {
    const initialAnimation = gsap.timeline();
    initialAnimation.from(".bottom-circle", {
      y: "-100%",
      opacity: 0,
      duration: 3,
      ease: "power2.out",
    });

    gsap.utils.toArray(".bottom-circle").forEach((text) => {
      ScrollTrigger.create({
        trigger: ".bottom-circle",
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(text, {
            y: "0%",
            opacity: 1,
            duration: 3,
            ease: "power4.out",
          });
        },
        onLeaveBack: () => {
          const tl = gsap.timeline();
          tl.to(text, {
            y: "100%",
            opacity: 0,
            duration: 3,
            ease: "power4.out",
          });
        },
        onEnterBack: () => {
          const tl = gsap.timeline();
          tl.to(text, {
            y: "0%",
            opacity: 1,
            duration: 3,
            ease: "power4.out",
          });
        },
        onLeave: () => {
          const tl = gsap.timeline();
          tl.to(text, {
            y: "100%",
            opacity: 0,
            duration: 3,
            ease: "power4.out",
          });
        },
        toggleActions: "play none none none",
      });
    });
  }, []);
  return (
    <div className="main-layout-container" ref={(e) => createRef(e, 3)}>
      <div className="absolute bottom-0 z-[-10px] w-full opacity-20 lg:opacity-100">
        <Image
          src={BottomCircle}
          alt="circle"
          className="w-full h-full bottom-circle"
        />
      </div>
      <div className="container mx-auto z-10 px-4 h-full flex">
        <div className="flex flex-col-reverse justify-center lg:grid grid-cols-12 gap-4">
          <div className=" md:col-span-8 lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-[30px] md:text-[36px] lg:text-[48px] font-bold capitalize font-tripsans lg:leading-[64px] text-lightGray">
              Why Choose Us
            </h3>
            <p className="text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] md:my-4  font-normal font-tripsans text-lightGray leading-5 2xl:leading-7">
              At Xero Bit Technology, we are committed to delivering exceptional
              value to our clients. Here’s why Xero Bit Technology is an Ideal
              company for you.
            </p>
            <div className="flex items-start  md:mb-4 ">
              <BsCircleFill size={20} className="text-lightGray mr-2 md:mr-4" />
              <p className="why-us-section-text">
                <b className="font-bold capitalize text-[18px]">
                  Customized Solutions:
                </b>
                &nbsp; We take the time to understand your business needs and
                provide customized solutions that meet your unique requirements.
              </p>
            </div>
            <div className="flex items-start  md:mb-4 ">
              <BsCircleFill size={20} className="text-lightGray mr-2 md:mr-4" />
              <p className="why-us-section-text">
                <b className="font-bold capitalize text-[18px]">
                  Innovative approach:
                </b>
                &nbsp; We stay up-to-date with the latest technology and design
                trends to provide innovative solutions that help your business
                thrive.
              </p>
            </div>
            <div className="flex items-start  md:mb-4 ">
              <BsCircleFill size={20} className="text-lightGray mr-2 md:mr-4" />
              <p className=" why-us-section-text">
                <b className="font-bold capitalize text-[18px]">
                  Exceptional customer service:
                </b>
                &nbsp; We pride ourselves on our commitment to customer
                satisfaction and work tirelessly to ensure that our clients are
                happy with our services.
              </p>
            </div>
            <div className="flex items-start  md:mb-4 ">
              <BsCircleFill size={20} className="text-lightGray mr-2 md:mr-4" />
              <p className="why-us-section-text">
                <b className="font-bold capitalize text-[18px]">
                  Experienced and professional team:
                </b>
                &nbsp; Our team of experts has years of experience in the
                technology and design industry, and is dedicated to helping your
                business succeed.
              </p>
            </div>
          </div>
          <div className="flex  items-center justify-center md:col-span-4 lg:col-span-6">
            <Image
              src={WHyUsImage}
              alt="why-us-img"
              className="w-full object-contain md:object-fill  h-[100px] sm:h-[150px] md:h-[250px] lg:h-[400px] 2xl:w-[397px] 3xl:h-[662px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
