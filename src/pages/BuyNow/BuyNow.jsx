import React from "react";
import Purchase from "../../components/Purchase/Purchase";

import { useParams } from "react-router-dom";
const data = [
  {
    id: "0",
    name: "Funky Sport",
    desc: "Bacca Bucci Men's Sneaker - This is a dummy description.",
    price: "1200",
    src: "./Images/s1.jpg",
    org: "1099",
    category: "shoes",
  },
  {
    id: "1",
    name: "Highlander",
    desc: "Highlander jeans - This is a dummy description.",
    price: "1799",
    src: "./Images/j3.jpg",
    org: "8999",
    category: "jeans",
  },
  {
    id: "2",
    name: "High Ankle",
    desc: "High ankle shoes - This is a dummy description.",
    price: "2000",
    src: "./Images/s3.jpg",
    org: "4099",
    category: "shoes",
  },
  {
    id: "3",
    name: "Chiproma Sneaker",
    desc: "Chiproma sneaker jeans - This is a dummy description.",
    price: "1200",
    src: "./Images/j1.jpg",
    org: "1099",
    category: "jeans",
  },
  {
    id: "4",
    name: "Boot",
    desc: "Boot jeans - This is a dummy description.",
    price: "3500",
    src: "./Images/j2.jpg",
    org: "4000",
    category: "jeans",
  },
  {
    id: "5",
    name: "Nike",
    desc: "Nike shoes - This is a dummy description.",
    price: "8000",
    src: "./Images/s6.jpg",
    org: "9999",
    category: "shoes",
  },
];


const BuyNow = () => {
  const { id } = useParams();

  // Filter the data based on the category or `id` value passed in the URL path
  const filteredData = data.filter((item) => item.name === id);
  console.log("filteredData buy now page" , filteredData[0].category);
  

  return (
    <div>
      <div className="text-5xl text-center py-5 font-semibold font-serif ">
        Premium {filteredData[0].category ?.charAt(0).toUpperCase() + filteredData[0].category?.slice(1)} 
      </div>
      <div className="flex lg:flex-row  w-full flex-col items-start gap-y-4 lg:gap-x-4 p-4 sm:p-5">
        {filteredData.length > 0 ? (
          filteredData.map((value) => (
            <Purchase
              key={value.id}
              desc={value.desc}
              Carttitle={"Add to cart"}
              src={`/${value.src}`}
              title={value.name}
              price={value.price}
              org={value.org}
            />
          ))
        ) : (
          <div className="text-2xl text-center  font-semibold font-serif ">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyNow;
