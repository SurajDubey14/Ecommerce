import React from "react";
import Card from "../../components/Card/Card.jsx";

const Collection = () => {
  const CardData = [
    {
      id: "1",
      title: "Shoes",
      img: "/Images/Shoes.jpg",
      link: "shoes",
    },
    {
      id: "2",
      title: "Jeans",
      img: "/Images/j1.jpg",
      link: "jeans",
    },
    {
      id: "3",
      title: "T-Shirt",
      img: "/Images/tshirt.jpg",
      link: "tshirt",
    },
    {
      id: "3",
      title: "Shirt",
      img: "/Images/shirt.jpg",
      link: "shirt",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-center font-serif text-5xl font-semibold py-5">
          {" "}
          Collection
        </p>
        <div className="flex lg:flex-row justify-around w-full flex-col items-center gap-y-4 lg:gap-x-4 p-4 sm:p-5">
          {CardData.map((value) => (
            <Card key={value.id} data={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
