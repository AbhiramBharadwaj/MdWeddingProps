import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Led Flower Stand"
          price="6000.00"
          color="Size: 24/36/48"
          badge={true}
          des="A stylish LED flower stand that illuminates and showcases your plants, creating a vibrant and elegant indoor display."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Metal Lumps"
          price="1100.00"
          color="Size: 14/18/22"
          badge={true}
          des="A collection of raw metal lumps, offering a unique, industrial aesthetic perfect for art, decor, or creative projects."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Flower Gallery"
          price="2399.00"
          color="Size: 24 inch"
          badge={true}
          des="Explore our Flower Gallery a vibrant collection of fresh blooms and unique arrangements perfect for any occasion."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Crystal Bowls"
          price="1350.00"
          color="Size: 18 inch"
          badge={true}
          des="Discover the elegance of our Crystal Bowls crafted with precision for timeless beauty and sophistication."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
