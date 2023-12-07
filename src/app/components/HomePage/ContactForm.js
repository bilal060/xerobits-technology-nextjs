"use client";
import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import ContactImg from "@/app/assets/images/contact-img.png";
import TextField from "@/app/shared/TextField";

const ContactForm = ({ createRef }) => {
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
    <div className="main-layout-container" ref={(e) => createRef(e, 7)}>
      <div className="container mx-auto px-4">
        <div className=" flex flex-col-reverse  mx-auto md:grid md:grid-cols-12  gap-4">
          <div className="flex md:col-span-8 lg:col-span-6 mt-4 lg:mt-12 flex-col  z-10">
            <h3 className="text-[30px] md:text-[36px] capitalize  font-bold font-tripsans text-lightGray">
              fill out this form to get started
            </h3>
            <div className="w-full">
              <Formik
                initialValues={initialValues}
                validationSchema={errorSchema}
                onSubmit={handleSubmit}
              >
                {(props) => (
                  <Form className="w-full">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4 2xl:my-8">
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
                    <button className="md-btn bg-green text-white 2xl:mt-8 button--ujarak button--border-thick button--text-upper button--size-s button--inverted button--text-thick">
                      Learn More
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className=" md:col-span-4 lg:col-span-6 flex mt-4 lg:mt-12  items-center justify-center flex-col z-10">
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
