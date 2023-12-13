"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import ServicesText from "@/app/assets/images/services-text.png";
import { servicesImagesData } from "../../../../ServicesImagesData.js";
import Button from "@/app/shared/Button.js";
import {
  animateSectionRightX,
  textRevealAnimation,
} from "@/app/helpers/GsapAnimations.js";

const ServicesSections = ({ createRef, activeSection }) => {
  const [imagePreviewId, setImagePreviewId] = useState(null);

  useEffect(() => {
    if (activeSection === "services-section") {
      animateSectionRightX(".services-img", "power2.out");
      textRevealAnimation(".btn-services");
    }
  }, [activeSection]);

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
    <div
      className="panel main-layout-container services services-section-container"
      ref={createRef}
    >
      <div className="container mx-auto z-10 px-4 h-full">
        <div className=" h-full  flex justify-center flex-col">
          <div className="flex flex-row-reverse items-center">
            <div>
              <Image
                alt="services-text-img"
                className="hidden md:block h-[400px] w-[40px] xl:h-[430px] xl:w-[45px] 3xl:w-[75px] 3xl:h-[760px] ml-8 services-img"
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
                    className="services-img-container transition md:py-0 sm:py-4 py-3"
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
                      <Button
                        className="md-btn border-white"
                        type="white"
                        text="View All"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-6 lg:mt-8 2xl:mt-12 justify-center">
            <Button
              className="md-btn btn-services"
              type="green"
              text="View More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSections;
