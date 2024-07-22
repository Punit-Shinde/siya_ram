// src/components/partials/FilterBar.js

import React from "react";

const FilterBar = ({ setSelectedCategory }) => {
  const categories = [
    "All",
    "Manchurian",
    "Noodles",
    "Rice",
    "Sandwich",
    "Burger",
    "Maggi",
    "Pasta",
    "Paratha",
    "French Fries",
    "SR Special",
  ];

  return (
    <div className="text-white w-[90%] h-48 flex text-nowrap gap-12 overflow-x-auto p-5 mx-5">
      {categories.map((category) => (
        <h3
          key={category}
          className="hover:text-primary hover:scale-125 hover:font-semibold"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </h3>
      ))}
    </div>
  );
};

export default FilterBar;
