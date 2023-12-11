import CarouselComponent from "@/app/shared/Carousel";
import React from "react";
import ReviewCrad from "./ReviewCard";

const ClientsSection = ({ createRef }) => {
  const clientsData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="main-layout-container" ref={(e) => createRef(e, 5)}>
      <div className="container px-4 mx-auto">
        <div className="w-full  flex flex-col justify-center ">
          <h3 className="text-[30px] md:text-[36px] lg:text-[48px]  capitalize text-center font-bold font-tripsans lg:leading-[64px] text-lightGray">
            what our clients say about us!
          </h3>
          <p className="text-[18px] my-2 lg:my-4 lg:w-[817px] mx-auto text-center  font-normal font-tripsans text-lightGray leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex
            facilisis vestibulum.
          </p>
          <div className="my-8 flex flex-col gap-2 md:gap-4">
            <div className="w-full">
              <CarouselComponent>
                {clientsData?.map((data, index) => (
                  <ReviewCrad key={index} />
                ))}
              </CarouselComponent>
            </div>
            {/* <div className="w-full md:block hidden">
              <CarouselComponent>
                {clientsData?.map((data, index) => (
                  <ReviewCrad key={index} />
                ))}
              </CarouselComponent>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
