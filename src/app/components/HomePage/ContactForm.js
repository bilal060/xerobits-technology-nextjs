"use client";
import React, { useEffect, useRef } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import CircleRightImg from "@/app/assets/images/circle-top.png";
import ContactImg from "@/app/assets/images/contact-img.png";
import TextField from "@/app/shared/TextField";
import Button from "@/app/shared/Button";
import { gsap } from "gsap";
import {
  zoomAnimationFunction,
  textRevealAnimation,
} from "@/app/helpers/GsapAnimations";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = ({ createRef, activeSection }) => {
  const circleImageRef = useRef(null);
  useEffect(() => {
    if (activeSection == "contact-section") {
      textRevealAnimation(".btn-contact");
      ScrollTrigger.create({
        trigger: circleImageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          zoomAnimationFunction(circleImageRef.current, 5, 1, 1, 1);
        },
        onLeaveBack: () => {
          zoomAnimationFunction(circleImageRef.current, 5, 1, 1, 1);
        },
        onEnterBack: () => {
          zoomAnimationFunction(circleImageRef.current, 5, 1, 1, 1);
        },
        onLeave: () => {
          zoomAnimationFunction(circleImageRef.current, 5, 1, 1, 1);
        },
        toggleActions: "play none none none",
      });
      // animateSectionRightX(".about-image", "power2.out");
    }
  }, [activeSection]);
  // Form Initial Values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  // Error Schema
  const errorSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    const data = {};
  };
  return (
    <div
      className="panel main-layout-container contact-us contact-section-container"
      ref={createRef}
    >
      <div className="absolute top-0 right-0 xs:opacity-100 opacity-30">
        <Image
          src={CircleRightImg}
          alt="HorizentalDots"
          className="w-full h-full about-image"
          ref={circleImageRef}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className=" flex flex-col-reverse  mx-auto md:grid md:grid-cols-12  gap-4">
          <div className="flex md:col-span-8 lg:col-span-6 mt-4 lg:mt-12 flex-col  z-10">
            <h3 className="text-[30px] md:text-[36px] capitalize  font-bold font-tripsans text-lightGray">
              Innovate With Confidence With Xero Bit Technology
            </h3>
            <div className="w-full">
              <Formik
                initialValues={initialValues}
                validationSchema={errorSchema}
                onSubmit={handleSubmit}
              >
                {(props) => (
                  <Form className="w-full">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 md:gap-4 gap-1 mb-4 2xl:my-8">
                      <TextField
                        type="text"
                        name="name"
                        placeholder="Full Name"
                      />
                      <TextField type="text" name="email" placeholder="Email" />
                    </div>
                    <TextField
                      type="text"
                      name="message"
                      placeholder="Message"
                      textarea="ture"
                    />
                    <Button
                      className="md-btn xl:mt-[56px] lg:mt-[44px] md:mt-[36px] mt-3 btn-contact"
                      type="green"
                      text="Send Message"
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className=" md:col-span-4 lg:col-span-6  mt-4 lg:mt-12  items-center justify-center flex-col z-10 sm:flex hidden">
            <Image
              src={ContactImg}
              alt="about-text"
              className="w-full max-w-[400px] h-[300px] md:w-full md:h-[350px] lg:max-w-[500px] lg:h-[400px] z-[-10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
