import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "New Arrivals",
      icons: true,
    },
    {
      _id: 991,
      title: "Gudgets",
    },
    {
      _id: 992,
      title: "Accessories",
      icons: true,
    },
    {
      _id: 993,
      title: "Electronics",
    },
    {
      _id: 994,
      title: "Others",
    },
  ];
  return (
    <div className="w-full">
      
    </div>
  );
};

export default Category;
