import Image from "next/image";
import React from "react";

import ClientImg from "@/app/assets/images/client-user.png";
import StarImg from "@/app/assets/images/star.png";

const ReviewCrad = () => {
  return (
    <div className="w-full h-auto py-8  md:py-0 px-4 flex flex-col justify-center md:max-w-[95%] md:h-[276px]  bg-[#23222D] rounded-xl">
      <p className="text-[14px] mb-4  text-lightGray font-normal font-tripsans leading-5">
        “The services provided by Xero Bit Technology have been extremely
        beneficial for us as they have acted as an extension of our IT
        department. They are always ready to take on any challenges or
        opportunities that come our way and we greatly appreciate their support
        in helping us succeed.”
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={ClientImg}
            alt="client-img"
            className="w-[64px] h-[64px]"
          />
          <div className="ml-2">
            <h5 className="text-[16px] font-bold font-tripsans text-lightGray leading-4">
              Alexander Leo
            </h5>
            <p className="text-[14px] text-lightGray font-tripsans font-normal">
              Google
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image src={StarImg} alt="client-img" className="w-[16px] h-[16px]" />
          <Image src={StarImg} alt="client-img" className="w-[16px] h-[16px]" />
          <Image src={StarImg} alt="client-img" className="w-[16px] h-[16px]" />
          <Image src={StarImg} alt="client-img" className="w-[16px] h-[16px]" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCrad;
