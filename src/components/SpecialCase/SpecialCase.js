import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  console.log(products.length);

  // Show the component only if there are items in the cart
  if (products.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile Version */}
      <div className="fixed bottom-4 left-4 right-4 z-20 flex justify-center sm:flex md:hidden">
        <Link to="/cart" className="w-full">
          <div className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-lg cursor-pointer relative">
            <RiShoppingCart2Fill className="text-xl mr-2" />
            <span className="text-base font-semibold">Buy Now</span>
            {products.length > 0 && (
              <p className="absolute top-1 right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {products.length}
              </p>
            )}
          </div>
        </Link>
      </div>

      {/* Desktop Version */}
      <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
        <Link to="/cart">
          <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
            <div className="flex justify-center items-center">
              <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
              <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
            </div>
            <p className="text-xs font-semibold font-titleFont">Buy Now</p>
            {products.length > 0 && (
              <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {products.length}
              </p>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default SpecialCase;
