import React from "react";
import { Link } from "react-router-dom";
import productOfTheYear from './imageproduct.png';
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc={productOfTheYear} // Correctly using the imported image
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The Year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            A sleek metal stick stand, designed to organize and display with a minimalist touch, perfect for entryways or stylish storage.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;