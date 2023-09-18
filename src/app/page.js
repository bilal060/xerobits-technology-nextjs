'use client';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import WhyChooseUs from './components/HomePage/WhyChooseUs';
import AboutSections from './components/HomePage/AboutSection';
import HeroSection from './components/HomePage/HeroSection';
import ServicesSections from './components/HomePage/ServicesSections';
import ProjectIdeaSection from './components/HomePage/ProjectIdeaSection';
import ClientsSection from './components/HomePage/ClientsSection';
import BlogSection from './components/HomePage/BlogSection';
import ContactForm from './components/HomePage/ContactForm';
import '@/app/assets/css/landing.css';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSections />
      <ServicesSections />
      <WhyChooseUs />
      <ProjectIdeaSection />
      <ClientsSection />
      <BlogSection />
      <ContactForm />
    </div>
  );
};

export default HomePage;
