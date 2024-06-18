import { useState } from "react";
import CartProgress from "../../components/CartProgress";
import ShopBanner from "../../components/ShopBanner";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { PiCompass } from "react-icons/pi";
import useCarts from "../../hooks/useCarts";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Cart = () => {
  const [allCarts, refetch, isLoading] = useCarts();
  const axiosPublic = useAxiosPublic();

  const handleQuantityChange = async (cart, newQuantity) => {
    console.log(newQuantity);
    const { _id: id, quantity } = cart;
    try {
      if (newQuantity >= 1) {
        await axiosPublic.put(`/api/v1/cart/${id}`, {
          quantity: newQuantity - quantity,
        });
        refetch();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleQuantityUp = async (cart) => {
    const { _id: id, quantity } = cart;
    try {
      await axiosPublic.put(`/cart/quantity/${id}`, { quantity: 1 });
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleQuantityDown = async (cart) => {
    const { _id: id, quantity } = cart;
    try {
      if (quantity > 1) {
        await axiosPublic.put(`/cart/quantity/${id}`, { quantity: -1 });
        refetch();
      } else {
        await handleDelete(id);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosPublic.delete(`/cart/${id}`);
      refetch();
    } catch (error) {
      console.error(error.message);
    }
  };

  const calculateTotal = () => {
    return allCarts
      .reduce((total, cart) => total + cart.price * cart.quantity, 0)
      .toFixed(2);
  };

  return (
    <section className="mt-32 mb-16">
      {/* banner------------start */}
      <div className="bg-text_white py-24 text-center">
        <ShopBanner routePath="Cart" />
      </div>
      {/* banner------------end */}
      <div className="container mx-auto">
        {/* progress ----------start */}
        <CartProgress
          bgColor1="bg-[#294CFF]"
          whiteText={"text-text_white"}
          primaryLiteText2={"text-primary_hover_color"}
          primaryLiteText3={"text-primary_hover_color"}
        />
        {/* progress ----------end */}

        {allCarts.length === 0 ? (
          <div className="container mx-auto p-4 flex flex-col  justify-start">
            <div className="bg-gray-100 p-4 rounded shadow-md w-full">
              <div className="flex justify-start gap-4">
                <PiCompass className="text-3xl" />
                <div>
                  <h2 className="text-gray-700 text-xl font-bold">
                    Your cart is
                  </h2>
                  <p className="text-gray-500 mt-2">CURRENTLY EMPTY</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-gray-200 text-4xl md:text-7xl font-bold mt-10">
                Your cart is
              </h1>
              <h1 className="text-gray-200 text-5xl md:text-9xl font-bold">
                CURRENTLY EMPTY
              </h1>
            </div>
          </div>
        ) : (
          <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 border px-4"></th>
                    <th className="py-2 border px-4"></th>
                    <th className="py-2 border px-4">Product</th>
                    <th className="py-2 border px-4">Price</th>
                    <th className="py-2 border px-4">Quantity</th>
                    <th className="py-2 border px-4">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {allCarts?.map((cart) => {
                    const { _id, img, price, colorName, quantity } = cart;
                    return (
                      <tr key={_id} className="border-x border-b">
                        <td className="py-2 px-4 text-center border">
                          <button
                            onClick={() => handleDelete(_id)}
                            className="text-text_hover_color text-2xl"
                          >
                            X
                          </button>
                        </td>
                        <td className="flex items-center justify-center py-8">
                          <Link to={`/product/${_id}`}>
                            <img
                              src={img}
                              alt="Product"
                              className="w-24 h-24 object-cover mr-4"
                            />
                          </Link>
                        </td>
                        <td className="border-x text-center py-8">
                          <h4>{colorName}</h4>
                        </td>
                        <td className="text-center border-r">
                          £{price.toFixed(2)}
                        </td>
                        <td className="text-center">
                          <button
                            className="p-5 mr-6 bg-slate-100 rounded-full"
                            onClick={() => handleQuantityDown(cart)}
                          >
                            <IoArrowDown className="text-xl text-slate-600" />
                          </button>
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                cart,
                                parseInt(e.target.value)
                              )
                            }
                            className="w-14 text-center text-xl text-slate-600"
                          />
                          <button
                            onClick={() => handleQuantityUp(cart)}
                            className="p-5 ml-6 bg-slate-100 rounded-full"
                          >
                            <IoArrowUp className="text-xl text-slate-600" />
                          </button>
                        </td>
                        <td className="border-l text-center">
                          £{(price * quantity).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-10">
              <div className="w-1/2 mx-auto"></div>
              <div className="bg-white p-6 w-1/2 mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Cart totals</h2>
                <div className="flex justify-between border p-4">
                  <span className="text-lg font-medium">Subtotal</span>
                  <span className="text-lg font-medium">
                    £{calculateTotal()}
                  </span>
                </div>
                <div className="flex justify-between border-b border-x p-4 mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    £{calculateTotal()}
                  </span>
                </div>
                <button className="bg-primary_color text-white py-4 px-8 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
