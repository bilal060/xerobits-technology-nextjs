"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const CarouselComponent = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1240, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={5000}
      transitionDuration={500}
      keyBoardControl={true}
      autoPlay={true}
      pauseOnHover={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[""]}
      arrows={false}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px mx-0 ml-2 md:ml-4"
    >
      {props?.children}
    </Carousel>
  );
};

export default CarouselComponent;
