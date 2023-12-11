"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { debounce } from "lodash";
import "@/app/assets/css/button.css";
import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import AboutSections from "./components/HomePage/AboutSection";
import HeroSection from "./components/HomePage/HeroSection";
import ServicesSections from "./components/HomePage/ServicesSections";
import ProjectIdeaSection from "./components/HomePage/ProjectIdeaSection";
import ClientsSection from "./components/HomePage/ClientsSection";
import BlogSection from "./components/HomePage/BlogSection";
import ContactForm from "./components/HomePage/ContactForm";
import "@/app/assets/css/landing.css";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();
  const [loading, setLoading] = useState(true);

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  const handleScroll = debounce(() => {
    panels.current.forEach((panel, i) => {
      const offsetTop = panel.offsetTop;
      const offsetHeight = panel.offsetHeight;
      const scrollY = window.scrollY;

      if (
        scrollY > offsetTop - window.innerHeight / 2 &&
        scrollY < offsetTop + offsetHeight / 2
      ) {
        gsap.to(panel, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      }
    });
  }, 200);

  useEffect(() => {
    let tops = panels.current.map((panel) =>
      ScrollTrigger.create({ trigger: panel, start: "top 100px" })
    );
    panels.current.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      // Add GSAP ScrollTrigger animations
      ScrollTrigger.create({
        trigger: panel,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        animation: gsap.to(panel, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }),
      });
    });
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map((st) => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            snapScroll
          );
        },
        duration: 0.1, // Adjust the duration
      },
    });

    // Set up event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Set loading to false once the animations are initialized
    setLoading(false);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={panelsContainer}>
      {loading && <div className="">Loading...</div>}
      <HeroSection createRef={createPanelsRefs} />
      <AboutSections createRef={createPanelsRefs} />
      <ServicesSections createRef={createPanelsRefs} />
      <WhyChooseUs createRef={createPanelsRefs} />
      <ProjectIdeaSection createRef={createPanelsRefs} />
      <ClientsSection createRef={createPanelsRefs} />
      <BlogSection createRef={createPanelsRefs} />
      <ContactForm createRef={createPanelsRefs} />
    </div>
  );
};

export default HomePage;
