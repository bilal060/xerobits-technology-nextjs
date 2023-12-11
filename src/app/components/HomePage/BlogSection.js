import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

import BlogImg1 from "@/app/assets/images/blog-img-1.png";
import BlogImg2 from "@/app/assets/images/blog-img-2.png";
import BlogImg3 from "@/app/assets/images/blog-img-3.png";
import Button from "@/app/shared/Button";

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
const BlogSection = ({ createRef }) => {
  return (
    <div className="main-layout-container blogs" ref={(e) => createRef(e, 6)}>
      <div className="container mx-auto px-4">
        <h3 className="text-48px text-lightGray">read our latest blogs</h3>
        <p className="text-18px my-2 lg:my-4 lg:w-[817px] mx-auto text-center  text-lightGray leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex
          facilisis vestibulum.
        </p>
        <div className="flex gap-4 mt-4 sm:grid-cols-3 overflow-auto no-scrollbar">
          {(blogs || []) &&
            blogs.map((data) => (
              <div
                key={data._id}
                className="min-w-[250px] xs:min-w-[300px] sm:min-w-[unset]"
              >
                <div className="w-full ">
                  <Image
                    src={data.image}
                    alt="blog-img"
                    className="w-full lg:h-[150px]  2xl:h-[235px]"
                  />
                  <h3 className=" text-[20px] md:text-[24px] lg:my-2 font-bold font-tripsans text-lightGray">
                    {data.name}
                  </h3>
                  <p className="text-[16px] my-2 lg:my-2  font-tripsans font-normal text-lightGray">
                    {data.description}
                  </p>
                  <div className="flex items-center ">
                    <p className="text-lightGray font-bold font-tripsans text-[16px]">
                      Read Blog
                    </p>
                    <FaAngleRight
                      size={20}
                      className="text-lightGray ml-2 mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center 2xl:mt-8 mt-6">
          <Button className="md-btn" type="green" text="View More" />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
