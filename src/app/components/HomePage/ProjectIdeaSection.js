"use-client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIdeaRocketImg from "@/app/assets/images/rocket.svg";
import ProjectIdeaVerifiedImg from "@/app/assets/images/verified.svg";
import Circle from "@/app/assets/images/circlefull.png";

import Button from "@/app/shared/Button";
import { zoomAnimation } from "@/app/helpers/GsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const ProjectIdeaSection = ({ createRef, activeSection }) => {
  const mainDivRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (activeSection == "projectidea-section") {
      const mainDiv = mainDivRef.current;
      const circleImage = circleRef.current;

      ScrollTrigger.create({
        trigger: mainDiv,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          zoomAnimation(mainDiv, 1, 1, 1, 1);
        },
        onLeaveBack: () => {
          zoomAnimation(mainDiv, 0, 1, 0, 1);
        },
        onEnterBack: () => {
          zoomAnimation(mainDiv, 1, 0, 1, 0);
        },
        onLeave: () => {
          zoomAnimation(mainDiv, 0, 1, 0, 1);
        },
        toggleActions: "play none none none",
      });

      ScrollTrigger.create({
        trigger: circleImage,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          zoomAnimation(circleImage, 2, 1, 1, 1);
        },
        onLeaveBack: () => {
          zoomAnimation(circleImage, 2, 1, 1, 1);
        },
        onEnterBack: () => {
          zoomAnimation(circleImage, 2, 1, 1, 1);
        },
        onLeave: () => {
          zoomAnimation(circleImage, 2, 1, 1, 1);
        },
        toggleActions: "play none none none",
      });
    }
  }, [activeSection]);

  return (
    <div
      className="panel main-layout-container projectidea-section-container"
      ref={createRef}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center flex-col relative">
          <Image
            alt="circle-img"
            src={Circle}
            ref={circleRef}
            className="lg:block hidden absolute lg:h-[500px] 2xl:h-[750px] lg:-top-20 2xl:-top-[6rem] 2xl:w-[70%] xl:w-[60%] w-[70%]"
          />
          <div
            ref={mainDivRef}
            className="bg-project-idea-laptop 2xl:h-[410px] md:h-[260px] md:w-[450px] sm:h-[220px] h-[200px] 2xl:w-[600px] sm:w-[350px] w-[300px] relative main-div"
          >
            <Image
              alt="rocket-img"
              src={ProjectIdeaRocketImg}
              className="absolute right-0 2xl:h-[120px] md:w-[120px] h-[60px] w-[60px] rocket-img"
            />
            <Image
              alt="main-img"
              className="absolute bottom-0 2xl:h-[120px] md:w-[120px] h-[60px] w-[60px] verified-img"
              src={ProjectIdeaVerifiedImg}
            />
          </div>
          <h3 className=" text-lightGray text-56px capitalize">
            Have an awesome project idea?
          </h3>
          <p className=" my-4 text-lightGray text-18px lg:w-[817px] text-center">
            Ready to make your business stand out in this digital world? Contact
            us today to arrange a consultation with one of our experts
          </p>
          <Button className="md-btn" type="green" text="Lets Talk" />
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeaSection;
