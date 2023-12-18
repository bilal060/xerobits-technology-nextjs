import Image from "next/image";
import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

import BlogImg1 from "@/app/assets/images/blog-img-1.png";
import BlogImg2 from "@/app/assets/images/blog-img-2.png";
import BlogImg3 from "@/app/assets/images/blog-img-3.png";
import Button from "@/app/shared/Button";
import { textRevealAnimation } from "@/app/helpers/GsapAnimations";

const blogs = [
  {
    _id: 1,
    image: BlogImg1,
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.",
  },
  {
    _id: 2,
    image: BlogImg2,
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.",
  },
  {
    _id: 3,
    image: BlogImg3,
    name: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.",
  },
];
const BlogSection = ({ createRef, activeSection }) => {
  useEffect(() => {
    if (activeSection == "blog-section") {
      textRevealAnimation(".btn-blogs");
    }
  }, [activeSection]);
  return (
    <div
      className="panel main-layout-container blogs blog-section-container"
      ref={createRef}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-48px text-lightGray">read our latest blogs</h3>
        <p className="text-18px my-2 lg:my-4 lg:w-[817px] mx-auto text-center  text-lightGray leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex
          facilisis vestibulum.
        </p>
        <div className=" grid gap-4 mt-4 grid-cols-1 md:grid-cols-3 overflow-auto no-scrollbar">
          {(blogs || []) &&
            blogs.map((data) => (
              <div
                key={data._id}
                className="min-w-[250px] my-2 md:my-0 xs:min-w-[300px] xs:max-w-[400px] md:min-w-[unset] mx-auto md:mx-0"
              >
                <div className="w-full ">
                  <div className="lg:h-[150px]  2xl:h-[235px] overflow-hidden rounded-lg">
                    <Image
                      loading="lazy"
                      src={data.image}
                      alt="blog-img"
                      className="w-full h-full img-zoom"
                    />
                  </div>
                  <h3 className=" text-[20px] md:text-[24px] lg:my-2 font-bold font-tripsans text-lightGray">
                    {data.name}
                  </h3>
                  <p className="text-[16px] my-2 lg:my-2  font-tripsans font-normal text-lightGray">
                    {data.description}
                  </p>
                  <div className="flex items-center group cursor-pointer w-fit">
                    <p className="text-lightGray font-bold font-tripsans text-[16px] group-hover:text-green">
                      Read Blog
                    </p>
                    <FaAngleRight
                      size={20}
                      className="text-lightGray ml-2 mt-1 group-hover:text-green"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center 2xl:mt-8 mt-6">
          <Button className="md-btn btn-blogs" type="green" text="View More" />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
