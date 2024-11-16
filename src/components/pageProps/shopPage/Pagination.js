import React, { useState } from "react";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";

// Define categories with images and titles
const categories = [
  {
    title: "Chandelier",
    image: require("../../../assets/images/products/bestSeller/Chandlier_Cover.jpeg"),
  },
  {
    title: "Metal props",
    image: require("../../../assets/images/Pagination_Folder/3.webp"),
  },
  {
    title: "Center piece",
    image: require("../../../assets/images/Pagination_Folder/6.jpg"),
  },
  {
    title: "Mirror props",
    image: require("../../../assets/images/Pagination_Folder/7.jpg"),
  },
  {
    title: "Lighting lamp",
    image: require("../../../assets/images/Pagination_Folder/8.jpg"),
  },
  {
    title: "Luxury theme",
    image: require("../../../assets/images/Pagination_Folder/9.jpg"),
  },
  {
    title: "Wooden Products",
    image: require("../../../assets/images/Pagination_Folder/10.jpg"),
  },
  {
    title: "Haldi mehdi",
    image: require("../../../assets/images/Pagination_Folder/11.jpg"),
  },
  {
    title: "Glass Products",
    image: require("../../../assets/images/Pagination_Folder/5.webp"),
  },
];

const Pagination = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter items based on selected category
  const filteredItems = !selectedCategory
    ? paginationItems
    : paginationItems.filter((item) => item.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex justify-center py-8">
      <div className="max-w-screen-lg w-full px-4">
        {/* Category Display */}
        {selectedCategory === null ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleCategoryClick(category.title)}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-32 h-32 object-cover rounded-md shadow-lg"
                />
                <p className="mt-1 text-sm font-medium text-gold">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Product Display for Selected Category
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-4 text-sm text-gold underline"
            >
              Back to Categories
            </button>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div key={item._id} className="w-full border border-gold rounded-lg p-1 text-gold">
                  <Product
                    _id={item._id}
                    img={item.img}
                    productName={item.productName}
                    price={item.price}
                    color={item.color}
                    badge={item.badge}
                    des={item.des}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
