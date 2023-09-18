import Image from 'next/image';
import React from 'react';

import CircleImg from '@/app/assets/images/circle.png';
import HorizentalDots from '@/app/assets/images/horizental-dots.svg';
import VerticalDots from '@/app/assets/images/vertical-dot.svg';

const HeroSection = () => {
  return (
    <div className=" main-layout-container mt-[75px] md:mt-[100px]">
      <div className="absolute bottom-0 right-0 z-[-10px]">
        <Image
          src={CircleImg}
          alt="circle"
          className="w-full md:h-[500px] lg:h-[700px] 2xl:h-[900px] 4xl:h-[1500px]"
        />
      </div>
      <div className="hidden lg:block absolute top-12 right-4 lg:right-20 2xl:right-40 z-[-10px]">
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
          className="hidden lg:block 2xl:my-4"
        />
        <h1 className="lg:w-[819px] text-56px gradient-text-green">
          Unleash Your Business Potential With Our Custom IT Solutions
        </h1>
        <p className="lg:w-[713px] my-4 2xl:my-8 3xl:my-12 text-lightGray text-18px">
          Customized solutions to simplify complex business processes, increase
          productivity, and enhance customer satisfaction with Xero Bit
          Technology
        </p>
        <button className="md-btn bg-green mb-2 lg:mb-0 lg:my-4 2xl:my-8 3xl:my-12 text-white">
          Learn More
        </button>
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
