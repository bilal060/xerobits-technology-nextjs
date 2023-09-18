import Image from 'next/image';
import React from 'react';

import ProjectIdeaImg from '@/app/assets/images/project-idea.png';

const ProjectIdeaSection = () => {
  return (
    <div className="main-layout-container ">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center flex-col">
          <div className="">
            <Image
              alt="main-img"
              className="h-[150px] w-[200px] md:h-[250px] md:w-[350px] 2xl:h-[424px] 2xl:w-[711px]"
              src={ProjectIdeaImg}
            />
          </div>
          <h3 className=" text-lightGray text-56px capitalize">
            Have an awesome project idea?
          </h3>
          <p className=" my-4 text-lightGray text-18px lg:w-[817px] text-center">
            Ready to make your business stand out in this digital world? Contact
            us today to arrange a consultation with one of our experts
          </p>
          <button className="md-btn bg-green text-white">Lets Talk</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectIdeaSection;
