import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleImg from "@/app/assets/images/circle.png";
import HorizentalDots from "@/app/assets/images/horizental-dots.svg";
import VerticalDots from "@/app/assets/images/vertical-dot.svg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ createRef }) => {
  return (
    <div
      className="panel main-layout-container mt-[75px] md:mt-[100px] hero-section"
      ref={(e) => createRef(e, 0)}
    >
      {/* <div className="absolute bottom-0 right-0 z-[-10px]">
        <Image
          src={CircleImg}
          alt="circle"
          className="md:h-[500px] lg:h-[500px] 2xl:h-[400px] 4xl:h-[1500px]"
        />
      </div> */}
      <div className="hidden md:block absolute top-[calc(50%-50px)] dotted-square translate-y-[-50%] ">
        <Image
          src={HorizentalDots}
          alt="HorizentalDots"
          className="w-full h-full"
        />
      </div>

      <div className="container relative px-4 mx-auto z-10">
        <Image
          src={VerticalDots}
          alt="HorizentalDots"
          className="hidden md:block 2xl:my-4 mb-4"
        />
        <h1 className="reveal-text lg:w-[819px] text-56px gradient-text-green">
          Unleash Your Business Potential With Our Custom IT Solutions
        </h1>
        <p className="reveal-text md:w-[70%] lg:w-[713px] my-4 2xl:my-8 3xl:my-12 text-lightGray text-18px">
          Customized solutions to simplify complex business processes, increase
          productivity, and enhance customer satisfaction with Xero Bit
          Technology
        </p>
        <div class="content yobject-marked">
          <button class="reveal-text md-btn bg-green mb-2 lg:mb-0 lg:my-4 2xl:my-8 3xl:my-12 text-white button--ujarak button--border-thick button--text-upper button--size-s button--inverted button--text-thick">
            Learn More
          </button>
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="home-rectangle-bg bg-cover bg-center bg-no-repeat  flex flex-col justify-center w-full sm:w-[70%] h-[160px] sm:h-[200px] 2xl:h-[280px] lg:w-[618px]">
          <div className="flex w-[70%] items-center justify-around mx-auto">
            <div className="flex flex-col items-center">
              <h3 className="text-56px gradient-text-green">450+</h3>
              <p className="text-18px text-lightGray text-[14px] ">
                Project Done
              </p>
            </div>
            <div className="flex flex-col items-center">
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
