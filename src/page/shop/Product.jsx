import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ShopBanner from "../../components/ShopBanner";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";

import Tabs from "../../components/Tabs/Tabs";

import Tab from "../../components/Tabs/Tab";
import TabPanel from "../../components/Tabs/TabPanel";
import TabList from "../../components/Tabs/TabList";
import StarRating from "../../components/StarRating";
const Product = () => {
  // new-*--------------
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ rating, review, name, email });
  };

  // new-*--------------

  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const {
    data: product = null,
    refetch,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cart/${id}`);
      return res.data;
    },
    enabled: !!id, // Ensure the query runs only if `id` is not null
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const {
    colorName,
    sales,
    releaseDate,
    // rating,
    productInformation,
    price,
    description2,
    description1,
    img,
  } = product;
  const [firstSentence, ...restOfDescription] = description2.split(". ");

  const restOfDescriptionText = restOfDescription.join(". ");
  return (
    <section className="mt-32">
      <div className="bg-text_white py-24 text-center">
        <ShopBanner
          routePath={
            <span>
              Shop <span className="text-xl mx-4">&gt;</span> {colorName}
            </span>
          }
        />
      </div>
      {/* <h1>{product.colorName}</h1>
      <img className="w-[668px]" src={product.img} alt={product.colorName} />
      <p>{product.productInformation}</p>
      <p>£{product.price}</p> */}

      <div className="container mx-auto">
        <div className="flex justify-between  gap-14 mt-[70px] mb-24">
          <div className="w-1/2">
            <img className="w-[668px] " src={img} alt={colorName} />
          </div>
          {/* text ------------------------------------------------------------------*/}
          <div className="w-1/2">
            <h1 className="text-3xl font-extrabold text-[#3F3849]">
              {colorName}
            </h1>
            <div className="w-full border h-[1px] my-6 border-gray-200"></div>
            <span className="text-2xl font-bold text-[#3F3849]">£ {price}</span>
            <div className="w-full border h-[1px] my-6 border-gray-200"></div>
            <p className="text-base text-[#8D8698] leading-[28px] font-medium">
              {description1}
            </p>
            <form className="flex justify-between items-center">
              <div className="my-9">
                <button
                  className="p-5 mr-0 bg-slate-100 rounded-full"
                  // onClick={() => handleQuantityDown(cart)}
                >
                  <IoArrowDown className="text-xl text-slate-600" />
                </button>
                <input
                  type="text"
                  value={1}
                  // onChange={(e) =>
                  //   handleQuantityChange(
                  //     cart,
                  //     parseInt(e.target.value)
                  //   )
                  // }
                  className="w-14 text-center text-xl text-slate-600"
                />
                <button
                  // onClick={() => handleQuantityUp(cart)}
                  className="p-5 ml-0 bg-slate-100 rounded-full"
                >
                  <IoArrowUp className="text-xl text-slate-600" />
                </button>
              </div>
              <button className="py-4 flex gap-3 items-center px-8 bg-primary_color rounded-full cursor-pointer text-sm font-bold text-white ">
                <LuShoppingCart className="text-xl" /> ADD TO CART
              </button>
            </form>
            <p className="text-lg text-[#3F3849]">
              <span className=" font-bold text-xl ">Category :</span>{" "}
              <span className="uppercase"> {productInformation}</span>
            </p>
            <button className="mt-8 bg-[#F2F2F2] custom-hover-effect rounded-full px-7 py-3 text-base uppercase flex gap-4 items-center text-[#8D8698] font-bold">
              <CiShare2 className="text-3xl" />
              Share
            </button>

            {/* --------------------------------------- */}
            <div className="mt-8">
              <Tabs>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Additional information</Tab>
                  <Tab>Reviews (0)</Tab>
                </TabList>

                <TabPanel>
                  <div>
                    <h2 className="text-lg font-extrabold text-[#3F3849] mb-5">
                      Product Description
                    </h2>
                    <p className="text-[#8D8698] text-base font-medium leading-[30px]">
                      {firstSentence} .
                    </p>
                    <p className="text-[#8D8698] text-base font-medium leading-[30px]">
                      {restOfDescriptionText}
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <h2 className="text-lg font-bold mb-4">
                      Additional information
                    </h2>
                    <table className="min-w-full border-collapse border">
                      <tbody>
                        <tr className="border-t">
                          <th className="text-left p-4 font-semibold border-b border-r">
                            Weight
                          </th>
                          <td className="text-start p-4 border-b">1 kg</td>
                        </tr>
                        <tr className="border-t ">
                          <th className="text-left p-4 font-semibold border-b border-r">
                            Material
                          </th>
                          <td className="text-start p-4 border-b">
                            50% Polyester, 30% Silk, 20% Acrylic
                          </td>
                        </tr>
                        <tr className="border-t">
                          <th className="text-left p-4 font-semibold border-r">
                            Made in
                          </th>
                          <td className="text-start p-4">Wonderland</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                      <h3 className="text-lg font-semibold">
                        Be the first to review Charcoal Black
                      </h3>
                      <StarRating rating={rating} setRating={setRating} />
                      <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Your review"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="4"
                        required
                      />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      />
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="save-info"
                          className="form-checkbox"
                        />
                        <label htmlFor="save-info" className="text-sm">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
