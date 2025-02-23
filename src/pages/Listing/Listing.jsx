import React from "react";
import { useParams } from "react-router-dom";
import Addcart from "../../components/AddCart/AddCart";

const data = [
  {
    id: "0",
    name: "Funky Sport",
    price: "1200",
    src: "./Images/s1.jpg",
    org: "1099",
    category: "shoes",
  },
  {
    id: "1",
    name: "Highlander",
    price: "1799",
    src: "./Images/j3.jpg",
    org: "8999",
    category: "jeans",
  },
  {
    id: "2",
    name: "High Ankle",
    price: "2000",
    src: "./Images/s3.jpg",
    org: "4099",
    category: "shoes",
  },
  {
    id: "3",
    name: "Chiproma Sneaker",
    price: "1200",
    src: "./Images/j1.jpg",
    org: "1099",
    category: "jeans",
  },
  {
    id: "4",
    name: "Boot",
    price: "3500",
    src: "./Images/j2.jpg",
    org: "4000",
    category: "jeans",
  },
  {
    id: "5",
    name: "Nike",
    price: "8000",
    src: "./Images/s6.jpg",
    org: "9999",
    category: "shoes",
  },
];

const Listing = () => {
  // Get the `id` parameter from the URL using the `useParams` hook
  const { id } = useParams();

  // Filter the data based on the category or `id` value passed in the URL path
  const filteredData = data.filter((item) => item.category === id);

  return (
    <div >
      <div className="text-5xl text-center py-5 font-semibold font-serif ">
        Premium {id?.charAt(0).toUpperCase() + id?.slice(1)} Collection
      </div>
      <div className="flex lg:flex-row justify-around w-full flex-col items-center gap-y-4 lg:gap-x-4 p-4 sm:p-5">
        {filteredData.length > 0 ? (
          filteredData.map((value) => (
            <Addcart
              key={value.id}
              Carttitle={"Add to cart"}
              src={`/${value.src}`}
              title={value.name}
              price={value.price}
              org={value.org}
            />
          ))
        ) : (
          <div className="text-2xl text-center  font-semibold font-serif ">No items found in this category.</div>
        )}
      </div>
    </div>
  );
};

export default Listing;
