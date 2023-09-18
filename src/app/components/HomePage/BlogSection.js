import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

import BlogImg1 from '@/app/assets/images/blog-img-1.png';
import BlogImg2 from '@/app/assets/images/blog-img-2.png';
import BlogImg3 from '@/app/assets/images/blog-img-3.png';

const BlogSection = () => {
  return (
    <div className="main-layout-container ">
      <div className="container mx-auto px-4">
        <h3 className="text-48px text-lightGray">read our latest blogs</h3>
        <p className="text-18px my-2 lg:my-4 lg:w-[817px] mx-auto text-center  text-lightGray leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex
          facilisis vestibulum.
        </p>
        <div className="grid grid-cols-1 gap-4 mt-4  md:grid-cols-3 ">
          <div className="flex justify-center items-center w-full">
            <div className="w-full lg:w-full lg:h-[300px] 2xl:w-[397px] 2xl:h-[419px]">
              <Image
                src={BlogImg1}
                alt="blog-img"
                className="w-full lg:h-[150px] lg:w-full 2xl:w-[397px] 2xl:h-[235px]"
              />
              <h3 className=" text-[20px] md:text-[24px] lg:my-2 font-bold font-tripsans text-lightGray">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-[16px] my-2 lg:my-2  font-tripsans font-normal text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor
                orci sed ex facilisis vestibulum.
              </p>
              <div className="flex items-center ">
                <p className="text-lightGray font-bold font-tripsans text-[16px]">
                  Read Blog
                </p>
                <FaAngleRight size={20} className="text-lightGray ml-2 mt-1" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full  lg:w-full lg:h-[300px] 2xl:w-[397px] 2xl:h-[419px]">
              <Image
                src={BlogImg2}
                alt="blog-img"
                className="w-full lg:h-[150px] lg:w-full 2xl:w-[397px] 2xl:h-[235px]"
              />
              <h3 className=" text-[20px] md:text-[24px] lg:my-2 font-bold font-tripsans text-lightGray">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-[16px] my-2 lg:my-2  font-tripsans font-normal text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor
                orci sed ex facilisis vestibulum.
              </p>
              <div className="flex items-center ">
                <p className="text-lightGray font-bold font-tripsans text-[16px]">
                  Read Blog
                </p>
                <FaAngleRight size={20} className="text-lightGray ml-2 mt-1" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full lg:w-full lg:h-[300px] 2xl:w-[397px] 2xl:h-[419px]">
              <Image
                src={BlogImg3}
                alt="blog-img"
                className="w-full w- lg:h-[150px] lg:w-full 2xl:w-[397px] 2xl:h-[235px]"
              />
              <h3 className=" text-[20px] md:text-[24px] lg:my-2 font-bold font-tripsans text-lightGray">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-[16px] my-2 lg:my-2  font-tripsans font-normal text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor
                orci sed ex facilisis vestibulum.
              </p>
              <div className="flex items-center ">
                <p className="text-lightGray font-bold font-tripsans text-[16px]">
                  Read Blog
                </p>
                <FaAngleRight size={20} className="text-lightGray ml-2 mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="md-btn bg-green text-white">View More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
