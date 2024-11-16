import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
  newArrSix,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
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
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Stand"
            price="3200.00"
            color="Size: 42 inch"
            badge={true}
            des="A sleek round table stand, perfect for holding decor or essentials, adding a touch of modern elegance to any space."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Crystal Stand"
            price="2000.00"
            color="Size: 32 inch"
            badge={true}
            des="A stunning crystal stand that enhances the beauty of any display, bringing a luxurious sparkle to your decor."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Acrylic Stand"
            price="2400.00"
            color="Size: 48 inch"
            badge={true}
            des="A clear acrylic stand that stylishly showcases items with a modern, minimalist touch, perfect for any setting."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Acrylic Chandiler"
            price="2600.00"
            color="Size: 36 inch"
            badge={false}
            des="An elegant acrylic chandelier that radiates light beautifully, adding a modern and sophisticated touch to any room."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Table Crystal Stand"
            price="2400.00"
            color="Size: 32 inch"
            badge={false}
            des="Enhance your décor with our Table Crystal Stand a stunning centerpiece that combines elegance with functionality."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100006"
            img={newArrSix}
            productName="Lotus Lump"
            price="2700.00"
            color="Size: 30 inch"
            badge={false}
            des="Illuminate your space with our Lotus Lamp a serene design inspired by nature, bringing warmth and tranquility to any room."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
