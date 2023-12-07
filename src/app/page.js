"use client";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
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

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    let tops = panels.current.map((panel) =>
      ScrollTrigger.create({ trigger: panel, start: "top 100px" })
    );
    panels.current.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          // if it's shorter than the viewport, we prefer to pin it at the top
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
          let panelStarts = tops.map((st) => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            snapScroll
          ); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
        },
        duration: 0.2,
      },
    });
  }, []);

  return (
    <div ref={panelsContainer}>
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
