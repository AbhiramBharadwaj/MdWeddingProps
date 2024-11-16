import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
    RecentProductOne as RecentProductImage,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
const RecentProductOne = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-17">
      <Heading heading="Our Recent Product" />
      <Slider {...settings}>
        <div className="px-2">
        <Product
           _id="1001"
           img={RecentProductImage}
           productName="Elephant"
           price="14500.00"
           color="Size: 5 feet"
           badge={true}
           des="A sleek round table stand, perfect for holding decor or essentials, adding a touch of modern elegance to any space."
        />

        </div>
      </Slider>
    </div>
  );
};

export default RecentProductOne;
