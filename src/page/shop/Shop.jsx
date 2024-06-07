import React, { useEffect, useState } from "react";
import ShopBanner from "../../components/ShopBanner";
import ShopCard from "../../components/ShopCard";
import Golden from "../../assets/shop/Watch6-300x300.jpg";
import Black from "../../assets/shop/Watch4-300x300.jpg";
import Pink from "../../assets/shop/Watch8-300x300.jpg";
import Green from "../../assets/shop/Watch5-300x300.jpg";
import Lemonade from "../../assets/shop/Watch3-300x300.jpg";
import Purple from "../../assets/shop/Watch2-300x300.jpg";
import SkyBlue from "../../assets/shop/Watch7-300x300.jpg";
import White from "../../assets/shop/Watch1-300x300.jpg";
import { data } from "autoprefixer";
const productData = [
  {
    _id: "2",
    itemName: "Golden Sunset",
    additionalInformation: "STRAP",
    price: 55,
    img: Golden,
    rating: 4,
    sales: 150,
    releaseDate: "2023-05-01",
  },
  {
    _id: "3",
    itemName: "Charcoal Black",
    additionalInformation: "body",
    price: 51,
    img: Black,
    rating: 5,
    sales: 200,
    releaseDate: "2023-01-15",
  },
  {
    _id: "6",
    itemName: "Light Pink",
    additionalInformation: "STRAP",
    price: 57,
    img: Pink,
    rating: 3,
    sales: 90,
    releaseDate: "2023-03-10",
  },
  {
    _id: "8",
    itemName: "Mint Green",
    additionalInformation: "STRAP",
    price: 59,
    img: Green,
    rating: 4,
    sales: 180,
    releaseDate: "2023-06-01",
  },
  {
    _id: "10",
    itemName: "Pink Lemonade",
    additionalInformation: "STRAP",
    price: 60,
    img: Lemonade,
    rating: 2,
    sales: 120,
    releaseDate: "2023-01-20",
  },
  {
    _id: "12",
    itemName: "Purple Berry",
    additionalInformation: "STRAP",
    price: 78,
    img: Purple,
    rating: 5,
    sales: 170,
    releaseDate: "2023-02-15",
  },
  {
    _id: "14",
    itemName: "Sky Blue",
    additionalInformation: "STRAP",
    price: 210,
    img: SkyBlue,
    rating: 1,
    sales: 60,
    releaseDate: "2022-12-10",
  },
  {
    _id: "16",
    itemName: "Snow White",
    additionalInformation: "STRAP",
    price: 72,
    img: White,
    rating: 4,
    sales: 140,
    releaseDate: "2023-07-01",
  },
];

const Shop = () => {
  const [sortOrder, setSortOrder] = useState("default");
  const [products, setProducts] = useState(productData);

  const handleSortingChange = (e) => {
    const sortValue = e.target.value;
    setSortOrder(sortValue);
    let sortedProducts = [...products];
    if (sortValue === "price-high-to-low") {
      sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (sortValue === "price-low-to-high") {
      sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortValue === "average-rating") {
      sortedProducts.sort((a, b) => {
        return b.rating - a.rating;
      });
    } else if (sortValue === "popularity") {
      sortedProducts.sort((a, b) => {
        return b.sales - a.sales;
      });
    } else if (sortValue === "latest") {
      sortedProducts.sort((a, b) => {
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      });
    } else {
      sortedProducts = productData;
    }
    setProducts(sortedProducts);
  };

  return (
    <section className=" mt-32  ">
      <div className="bg-text_white py-24 text-center">
        {/* banner */}
        <ShopBanner />
        {/* banner*-- end */}
      </div>
      {/* All Shop */}
      <div className="container mx-auto my-36">
        <div className=" mb-20 flex md:justify-between flex-col-reverse md:flex-row justify-center items-center lg:px-0 px-[75px]">
          <form className="w-full">
            <select
              onChange={handleSortingChange}
              value={sortOrder}
              className="appearance-none  block w-full px-4 py-3 max-w-sm text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-offset-text_hover_color "
            >
              <option value="default">Default Sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="average-rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low-to-high">
                Sort by price :low to high
              </option>
              <option value="price-high-to-low">
                Sort by price : high to low
              </option>
            </select>
          </form>
          <p className="text-base w-full md:text-end mb-6 md:mb-0 text-center font-medium text-[#8D8698] ">
            Showing all 8 results
          </p>
        </div>
        {/* card */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 lg:px-0  px-10">
          {products?.map((product) => {
            return <ShopCard key={product._id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
