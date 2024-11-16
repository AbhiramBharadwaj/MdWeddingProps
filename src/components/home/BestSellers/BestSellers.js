import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Metal Candal Stand"
          price="3800.00"
          color="Size - 4 feet"
          badge={true}
          des="A chic metal candle holder that adds warmth and elegance to any space, perfect for a timeless decorative touch."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Crystal Chandelier"
          price="3850.00"
          color="Size: 4 feet"
          badge={false}
          des="A dazzling crystal chandelier that sparkles with elegance, illuminating spaces with timeless luxury and charm."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Gold Black Chandila"
          price="3450.00"
          color="Size: 2 feet"
          badge={true}
          des="A stunning gold and black chandelier that blends luxury with modern sophistication, creating a bold statement piece for any room."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Metal Stick Stand"
          price="2750.00"
          color="Size: 4 feet"
          badge={false}
          des="A sleek metal stick stand, designed to organize and display with a minimalist touch, perfect for entryways or stylish storage."
        />
      </div>
    </div>
  );
};

export default BestSellers;
