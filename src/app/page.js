"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WhyChooseUs from "./components/HomePage/WhyChooseUs";
import AboutSections from "./components/HomePage/AboutSection";
import HeroSection from "./components/HomePage/HeroSection";
import ServicesSections from "./components/HomePage/ServicesSections";
import ProjectIdeaSection from "./components/HomePage/ProjectIdeaSection";
import ClientsSection from "./components/HomePage/ClientsSection";
import BlogSection from "./components/HomePage/BlogSection";
import ContactForm from "./components/HomePage/ContactForm";
import "@/app/assets/css/landing.css";
import "@/app/assets/css/button.css";
import "@/app/assets/css/home.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);
  const sectionRefs = {
    heroSection: useRef(null),
    aboutUs: useRef(null),
    services: useRef(null),
    whyChooseUs: useRef(null),
    clientSection: useRef(null),
    projectIdea: useRef(null),
    contact: useRef(null),
    blogSection: useRef(null),
  };

  const {
    heroSection,
    aboutUs,
    services,
    whyChooseUs,
    clientSection,
    projectIdea,
    contact,
    blogSection,
  } = sectionRefs;

  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const panels = [
      heroSection,
      aboutUs,
      services,
      whyChooseUs,
      clientSection,
      projectIdea,
      contact,
      blogSection,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setActivePanelName(entry.target.className);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    panels.forEach((panelRef) => {
      observer.observe(panelRef.current);
    });

    // Function to handle scroll events
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerRect = containerRef.current.getBoundingClientRect();

      // Calculate which panel is in view based on scroll position and container bounding rect
      const inViewIndex = panels.findIndex((panelRef) => {
        const panelRect = panelRef.current.getBoundingClientRect();
        return (
          panelRect.top >= containerRect.top &&
          panelRect.bottom <= containerRect.bottom
        );
      });

      if (inViewIndex !== -1) {
        setActivePanel(inViewIndex);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the observer and scroll
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function setActivePanelName(panel) {
    const panelNameMappings = {
      "hero-section": "hero-section",
      "about-section-container": "about-section",
      "services-section-container": "services-section",
      "whyus-section-container": "whyus-section",
      "blog-section-container": "blog-section",
      "projectidea-section-container": "projectidea-section",
      "contact-section-container": "contact-section",
      "client-section-container": "client-section",
    };

    const matchedPanel = Object.entries(panelNameMappings).find(
      ([key, value]) => panel.includes(key)
    );

    if (matchedPanel) {
      setActivePanel(matchedPanel[1]);
    }
  }

  return (
    <div ref={containerRef} className="container-home">
      <HeroSection createRef={heroSection} activeSection={activePanel} />
      <AboutSections createRef={aboutUs} activeSection={activePanel} />
      <ServicesSections createRef={services} activeSection={activePanel} />
      <WhyChooseUs createRef={whyChooseUs} activeSection={activePanel} />
      <ProjectIdeaSection createRef={projectIdea} activeSection={activePanel} />
      <ClientsSection createRef={clientSection} activeSection={activePanel} />
      <BlogSection createRef={blogSection} activeSection={activePanel} />
      <ContactForm createRef={contact} activeSection={activePanel} />
    </div>
  );
};

export default HomePage;
