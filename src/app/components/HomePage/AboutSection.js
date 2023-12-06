import Image from 'next/image';
import React from 'react';

import AboutLogo from '@/app/assets/images/about-img.svg';
import AboutTextImg from '@/app/assets/images/about-text.svg';
import RightCircle from '@/app/assets/images/right-circle.png';

const AboutSections = ({ createRef }) => {
  return (
    <div className="panel main-layout-container " ref={(e) => createRef(e, 1)}>
      <div className="absolute h-full w-full top-0 right-0">
        <Image
          src={RightCircle}
          alt="about-right-circle"
          className=" hidden md:block md:w-[70%] lg:w-[800px] xl:max-w-[1252px] 2xl:w-[1252px]  h-[100%] 2xl:h-[100%] z-[-10px] absolute right-0"
        />
      </div>
      <div className="container px-4 mx-auto z-10">
        <div className="flex flex-col-reverse lg:grid md:grid-cols-12  gap-4 z-10">
          <div className="flex lg:col-span-8 2xl:col-span-6  flex-col justify-center z-10">
            <div className="flex items-center h-full">
              <Image
                src={AboutTextImg}
                alt="about-text"
                className=" hidden md:block md:h-[350px] lg:h-[90%] 2xl:h-[100%] z-[-10px]"
              />

              <div className="md:ml-8 flex flex-col 2xl:justify-around ">
                <h3 className="text-[24px] lg:text-[48px] 2xl:text-[56px] font-tripsans font-bold text-lightGray lg:w-[552px] 2xl:w-[600px]">
                  Our Approach to Digital Solutions
                </h3>
                <p className="text-[14px] text-18px 2xl:text-[20px] text-lightGray  mb-2 mt-2 md:mt-4 md:mb-4 2xl:my-8 lg:w-[549px] 2xl:leading-6">
                  At Xero Bit Technology, we believe in a client-centric
                  approach to digital solutions. Our team of experts works
                  closely with you to understand your unique business needs and
                  develop a customized strategy that delivers superior results.
                  From concept to launch, we stay with you every step of the
                  way, ensuring that you are fully satisfied with the end
                  product.
                </p>
                <p className="text-[14px] text-18px 2xl:text-[20px] text-lightGray  mb-4 lg:w-[549px] 2xl:leading-6 ">
                  We use the latest tools and technologies to deliver digital
                  solutions that are fast, efficient, and responsive. Our
                  solutions are designed to be scalable, ensuring that your
                  business can grow and evolve without being held back by
                  technological limitations. With our innovative digital
                  solutions, you can stay ahead of the curve and remain
                  competitive in today's fast-paced digital landscape.
                </p>
                <button className="md-btn bg-green text-white 2xl:mt-10">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:col-span-4 2xl:col-span-6  items-center justify-center w-full z-10">
            <Image
              src={AboutLogo}
              alt="about-section-img"
              className="w-[80px] h-[80px]  md:w-[150px] lg:w-[350px] 2xl:w-[600px] md:h-[150px] 2xl:h-[600px] lg:h-[387px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
