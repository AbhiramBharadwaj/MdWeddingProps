import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => String(_id).toLowerCase().split(" ").join("");
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: { item: productItem },
    });
  };

  return (
    <div className="w-full max-w-xs mx-auto relative group text-gold">
      <div className="w-full h-64 relative overflow-hidden bg-gray-100 rounded-lg">
        <Image className="w-full h-full object-cover" imgSrc={props.img} />
        <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-90 group-hover:h-32 transition-all duration-300">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-1 px-2 border-l border-r">
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }
              className="text-xs hover:text-gold border-b-[1px] border-b-gray-200 flex items-center justify-end gap-1 cursor-pointer pb-1 duration-300 w-full"
            >
              
            </li>
            <li
              onClick={handleProductDetails}
              className="text-xs hover:text-gold border-b border-gray-300 flex items-center justify-end gap-1 cursor-pointer pb-1 duration-300 w-150"
            >
              View Details
              <span className="text-sm">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 flex flex-col gap-1 border border-t-0 px-4 bg-white">
        <h2 className="text-sm font-semibold text-center">{props.productName}</h2>
        <p className="text-xs text-center">{props.color}</p>
        <p className="text-xs mt-1 font-bold text-center">Rs. {props.price}</p>
      </div>
    </div>
  );
};

export default Product;
