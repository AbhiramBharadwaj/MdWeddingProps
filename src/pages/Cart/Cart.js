import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom"; // Add this line

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0); // Shipping charge set to 0
  const [discount, setDiscount] = useState(0);
  const [voucherCode, setVoucherCode] = useState("");

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);

  const applyVoucher = () => {
    if (voucherCode === "SAVE5") {
      setDiscount(0.05);
    } else if (voucherCode === "SAVE10") {
      setDiscount(0.10);
    } else if (voucherCode === "SAVE15") {
      setDiscount(0.15);
    } else {
      setDiscount(0);
      alert("Invalid voucher code. Please try again.");
    }
  };

  const discountedTotal = totalAmt - totalAmt * discount;

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <p className="text-lg font-semibold">Update Cart</p>
          </div>
          <div className="max-w-7xl flex justify-end mt-4">
            <div className="w-full max-w-lg flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div className="flex flex-col gap-2 border-[1px] border-gray-400">
                <div className="flex justify-between py-1.5 px-4 text-lg font-medium border-b">
                  <span>Subtotal</span>
                  <span className="font-semibold tracking-wide font-titleFont">
                    Rs {totalAmt}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 px-4 text-lg font-medium border-b">
                  <span>Shipping Charge</span>
                  <span className="font-semibold tracking-wide font-titleFont">
                    Rs {shippingCharge}
                  </span>
                </div>
                <div className="px-4 py-2">
                  <h2 className="font-semibold text-lg mb-2">Apply Voucher Code</h2>
                  <input
                    type="text"
                    className="w-full border-[1px] border-gray-400 p-2 outline-none mb-2"
                    placeholder="Enter voucher code"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                  />
                  <button
                    className="w-full py-2 bg-blue-500 text-white font-semibold hover:bg-blue-700 duration-300"
                    onClick={applyVoucher}
                  >
                    Apply Voucher
                  </button>
                  <p className="text-sm text-gray-600 mt-1 text-center">
                  </p>
                </div>
                <div className="flex justify-between py-1.5 px-4 text-lg font-medium border-b">
                  <span>Discount</span>
                  <span className="font-semibold tracking-wide font-titleFont">
                    -Rs {totalAmt * discount}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 px-4 text-lg font-medium">
                  <span>Total</span>
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    Rs {discountedTotal + shippingCharge}
                  </span>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="w-full py-2 bg-primeColor text-white hover:bg-black duration-300"
                  onClick={() => {
                    const productDetails = products.map(
                      (item) => `${item.name}: ${item.quantity} x Rs. ${item.price}`
                    ).join("\n\n");

                    const message = `Hello, I would like to proceed with my order. Here are the details of my cart:\n\n${productDetails}\n\nTotal amount is Rs. ${discountedTotal + shippingCharge}.`;
                    const encodedMessage = encodeURIComponent(message);

                    window.open(
                      `https://wa.me/+919927942278?text=${encodedMessage}`,
                      "_blank"
                    );
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
