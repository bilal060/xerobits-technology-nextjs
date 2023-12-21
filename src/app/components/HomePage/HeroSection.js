import Image from "next/image";
import React, { useEffect } from "react";
import HorizentalDots from "@/app/assets/images/horizental-dots.svg";
import VerticalDots from "@/app/assets/images/vertical-dot.svg";
import Button from "@/app/shared/Button";
import { textRevealAnimation } from "@/app/helpers/GsapAnimations";

const HeroSection = ({ createRef, activeSection }) => {
  useEffect(() => {
    if (activeSection == "hero-section") {
      textRevealAnimation(".reveal-text");
      return () => {
        textRevealAnimation(".reveal-text");
      };
    }
  }, [activeSection]);

  return (
    <div
      className="panel main-layout-container hero-section hero-section-container"
      id="hero-section-container"
      ref={createRef}
    >
      <div className="hidden md:block absolute top-[calc(50%-50px)] dotted-square translate-y-[-50%] ">
        <Image
          src={HorizentalDots}
          alt="HorizentalDots"
          width={"auto"}
          height={"auto"}
          loading="lazy"
          className="w-full h-full"
        />
      </div>

      <div className="container relative px-4 mx-auto z-10">
        <Image
          src={VerticalDots}
          alt="HorizentalDots"
          width={"auto"}
          height={"auto"}
          loading="lazy"
          className="hidden xl:block 2xl:my-4 mb-4"
        />
        <h1 className="reveal-text lg:w-[819px] text-56px gradient-text-green">
          Empowering Your Digital Dreams
        </h1>
        <p className="reveal-text md:w-[70%] lg:w-[713px] my-4 2xl:my-8 3xl:my-12 text-lightGray text-18px">
          Empowering businesses to achieve their full potential through our up
          to date technology and design.
        </p>
        <div className="content yobject-marked reveal-text">
          <Button
            className="md-btn mb-2 lg:mb-0 lg:my-4 2xl:my-8 3xl:my-12"
            type="green"
            text="Learn More"
          />
        </div>
      </div>
      <div className="md:container md:mx-auto reveal-text">
        <div className="react-angle mt-[40px] 2xl:mt-4 flex relative sm:w-[70%] sm:ml-[40px] md:ml-0  h-[130px] sm:h-[140px] md:h-[160px] 2xl:h-[170px] lg:w-[730px]">
          <div className="h-[1px] absolute top-0 text-[#393939] bg-[#393939] w-full rounded">
            <div className="moving-border-animation">
              <span></span>
            </div>
          </div>
          <div className=" absolute left-[-75px] sm:left-[-50px] lg:left-0 text-[#393939] bg-[#393939] rounded  border-t border-[#393939] rotate-90 w-[180px] md:w-[220px] top-[65px] md:top-[80px] 2xl:w-[250px] 2xl:top-[85px] 2xl:left-[-50px]">
            <div className="moving-border-animation">
              <span></span>
            </div>
          </div>
          <div className=" text-[#393939] absolute right-[-75px] sm:right-[-50px] lg:right-0 bg-[#393939] rounded border-t border-[#393939] rotate-90 w-[180px] md:w-[220px] top-[65px] md:top-[80px] 2xl:w-[250px] 2xl:top-[85px] 2xl:right-[-50px]">
            <div className="moving-border-animation">
              <span></span>
            </div>
          </div>
          <div className="h-[1px] text-[#393939] absolute bottom-0 bg-[#393939] w-full rounded">
            <div className="moving-border-animation">
              <span></span>
            </div>
          </div>
          <div className="flex w-[85%] md:w-[70%] items-center justify-around mx-auto">
            <div className="flex flex-col items-center h-full justify-center border-r border-[#393939] w-full">
              <h3 className="text-56px gradient-text-green">450+</h3>
              <p className="text-18px text-lightGray text-[14px] ">
                Project Done
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <h3 className=" text-56px  gradient-text-green">200+</h3>
              <p className=" text-18px text-lightGray text-[14px]">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
