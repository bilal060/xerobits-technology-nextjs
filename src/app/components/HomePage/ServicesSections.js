"use client";
import Image from "next/image";
import React, { useState } from "react";

import ServicesText from "@/app/assets/images/services-text.png";
import { servicesImagesData } from "../../../../ServicesImagesData.js";

const ServicesSections = ({ createRef }) => {
  const [imagePreviewId, setImagePreviewId] = useState(null);

  // Changes Grid Layout based on Condition
  const changeGridLayout = (id) => {
    if (imagePreviewId == id) return "md:col-span-7 col-span-12";
    if (imagePreviewId && imagePreviewId !== id)
      return "md:col-span-1 col-span-12";
    else return "md:col-span-2 col-span-12";
  };

  const checkImageId = (id) => {
    return imagePreviewId == id ? true : false;
  };

  return (
    <div className="main-layout-container " ref={(e) => createRef(e, 2)}>
      <div className="container mx-auto z-10 px-4 h-full">
        <div className=" h-full  flex justify-center flex-col">
          <div className="flex flex-row-reverse items-center">
            <div>
              <Image
                alt="services-text-img"
                className="hidden md:block h-[400px] w-[40px] xl:h-[430px] xl:w-[45px] 3xl:w-[75px] 3xl:h-[760px] ml-8 "
                src={ServicesText}
              />
            </div>
            <div className="flex-1 grid grid-cols-12 h-full gap-0">
              {servicesImagesData?.map((data, index) => (
                <div
                  className={`flex flex-col justify-center transition ${changeGridLayout(
                    data?.id
                  )} `}
                  key={index}
                >
                  <div
                    className="services-img-container transition md:py-0 sm:py-6 py-3"
                    style={{
                      backgroundImage: `${
                        checkImageId(data?.id)
                          ? `url(${data?.previewImage?.src})`
                          : `url(${data?.image?.src})`
                      }`,
                    }}
                    onMouseEnter={() => setImagePreviewId(index + 1)}
                    onMouseLeave={() => setImagePreviewId(null)}
                  >
                    <h3
                      className={`${
                        checkImageId(data?.id) ? "hidden" : "block"
                      } services-img-text writing-mode md:rotate-180 `}
                    >
                      {data?.title}
                    </h3>
                    <div
                      className={`${
                        checkImageId(data?.id) ? "block" : "hidden"
                      } mb-4 px-4`}
                    >
                      <h3 className="services-img-text">{data?.title}</h3>
                      <p className="text-18px text-white mb-4">{data?.text}</p>
                      <button className="md-btn text-white bg-transparent border border-white">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center my-4 2xl:mt-12 justify-center">
            <button className="md-btn  bg-green text-white button--ujarak button--border-thick button--text-upper button--size-s button--inverted button--text-thick">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSections;
