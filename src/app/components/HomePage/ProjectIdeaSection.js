"use-client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectIdeaRocketImg from "@/app/assets/images/rocket.svg";
import ProjectIdeaVerifiedImg from "@/app/assets/images/verified.svg";
import Circle from "@/app/assets/images/circle.svg";

import Button from "@/app/shared/Button";
gsap.registerPlugin(ScrollTrigger);

const ProjectIdeaSection = ({ createRef }) => {
  let rocket = useRef("");
  let verified = useRef("");
  let xValue =
    typeof window !== "undefined" && window.innerWidth > 768 ? 200 : 120;
  let yValue =
    typeof window !== "undefined" && window.innerWidth > 768 ? 200 : 120;

  useEffect(() => {
    gsap.to(
      rocket.current,
      {
        duration: 3,
        y: xValue,
        yoyo: true,
        repeat: -1,
      },
      []
    );
    gsap.to(
      verified.current,
      {
        duration: 3,
        x: yValue,
        yoyo: true,
        repeat: -1,
      },
      []
    );
  });

  const mainDivRef = useRef(null);

  useEffect(() => {
    const mainDiv = mainDivRef.current;

    gsap.fromTo(
      mainDiv,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,    
        ease: "power4.out",
        scrollTrigger: {
          trigger: mainDiv,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const circleRef = useRef(null);
  useEffect(() => {
    const circle = circleRef.current;

    gsap.fromTo(
      circle,
      {
        scale: 2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: circle,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="main-layout-container " ref={(e) => createRef(e, 4)}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center flex-col relative">
          <Image
            ref={circleRef}
            alt="rocket-img"
            src={Circle}
            className="lg:block hidden absolute lg:h-[500px] 2xl:h-[750px] lg:-top-20 2xl:-top-[6rem]"
          />
          <div
            className="bg-project-idea-laptop 2xl:h-[410px] md:h-[260px] md:w-[450px] sm:h-[220px] h-[200px] 2xl:w-[600px] sm:w-[350px] w-[300px] relative main-div"
            ref={mainDivRef}
          >
            <Image
              alt="rocket-img"
              src={ProjectIdeaRocketImg}
              ref={rocket}
              className="absolute right-0 2xl:h-[120px] md:w-[120px] h-[60px] w-[60px]"
            />
            <Image
              alt="main-img"
              className="absolute bottom-0 2xl:h-[120px] md:w-[120px] h-[60px] w-[60px]"
              src={ProjectIdeaVerifiedImg}
              ref={verified}
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
