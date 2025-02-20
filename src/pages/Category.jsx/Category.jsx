import React from "react";
import Card from "../../components/Card/Card.jsx";

const Category = () => {
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
  ];

  return (
    <div className="flex sm:flex-row flex-col items-center gap-x-10 p-10">
      {CardData.map((value) => (
        <Card key={value.id} data={value} />
      ))}
    </div>
  );
};

export default Category;
