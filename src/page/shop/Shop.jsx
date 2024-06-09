import React, { useEffect, useState } from "react";
import ShopBanner from "../../components/ShopBanner";
import ShopCard from "../../components/ShopCard";

import useProducts from "../../hooks/useProducts";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { RiCloseFill } from "react-icons/ri";
import {} from "react-dom";
import { Link } from "react-router-dom";

const Shop = () => {
  const [allProducts] = useProducts();
  const axiosPublic = useAxiosPublic();

  const [sortOrder, setSortOrder] = useState(
    localStorage.getItem("sortOrder") || "default"
  ); // input data and localStorage set--------------------------------------------------
  const [products, setProducts] = useState(allProducts); //set data backEnd
  const [loading, setLoading] = useState(false); //loading state

  useEffect(() => {
    if (allProducts.length > 0) {
      setProducts(allProducts);
    }
  }, [allProducts]);
  useEffect(() => {
    if (sortOrder !== "default") {
      sortProducts(sortOrder, allProducts);
    }
  }, [sortOrder, allProducts]);

  const handleSortingChange = (e) => {
    const sortValue = e.target.value;
    setSortOrder(sortValue);
    localStorage.setItem("sortOrder", sortValue); //set local store
    setLoading(true);
    setTimeout(() => {
      sortProducts(sortValue, products);
      setLoading(false);
    }, 500); // Simulate a delay for loading indicator
  };
  // sort logic---------------------------
  const sortProducts = (sortValue, products) => {
    let sortedProducts = [...products];
    if (sortValue === "price-high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === "price-low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "average-rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "popularity") {
      sortedProducts.sort((a, b) => b.sales - a.sales);
    } else if (sortValue === "latest") {
      sortedProducts.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    } else {
      sortedProducts = allProducts;
    }
    setProducts(sortedProducts);
  };
  // add cart--------------------------------function
  const handelCart = async (item) => {
    // console.log(id);
    const { _id: id, colorName, productInformation, price, img } = item;
    const cartItem = {
      colorName,
      productInformation,
      price,
      img,
      quantity: 1,
    };
    console.log(cartItem);
    try {
      const res = await axiosPublic.put(`/cart/${id}`, cartItem);
      if (res.status === 200) {
        // console.log(res.data.message);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-xl w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1 gap-5 grid">
                  <p className="text-lg font-medium text-gray-900">
                    <span className="font-bold text-base">{colorName}</span>has
                    been added to the cart.
                    <span>
                      {" "}
                      <a
                        href="/"
                        className="font-bold text-primary_color text-lg font-Poppins"
                      >
                        Show Cart
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center   text-text_hover_color  "
              >
                <RiCloseFill className="text-xl " />
              </button>
            </div>
          </div>
        ));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="mt-32">
      <div className="bg-text_white py-24 text-center">
        <ShopBanner />
      </div>
      <div className="container mx-auto my-36">
        <div className="mb-20 flex md:justify-between flex-col-reverse md:flex-row justify-center items-center lg:px-0 px-[75px]">
          <form className="w-full">
            <select
              onChange={handleSortingChange}
              value={sortOrder}
              className="appearance-none block w-full px-4 py-3 max-w-sm text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-offset-text_hover_color"
            >
              <option value="default">Default Sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="average-rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low-to-high">
                Sort by price: low to high
              </option>
              <option value="price-high-to-low">
                Sort by price: high to low
              </option>
            </select>
          </form>
          <p className="text-base w-full md:text-end mb-6 md:mb-0 text-center font-medium text-[#8D8698]">
            Showing all 8 results
          </p>
        </div>
        {loading ? (
          <div className="loading-indicator">Loading...</div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 lg:px-0 px-10">
            {Array.isArray(products) &&
              products.map((product) => (
                <ShopCard
                  key={product._id}
                  product={product}
                  handelCart={handelCart}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
