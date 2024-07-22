import React, { useState } from "react";

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

  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="text-white w-[90%] mb-0 flex text-nowrap gap-12 overflow-x-auto  mx-5 py-2">
      {categories.map((category) => (
        <h3
          key={category}
          className={`${
            activeCategory === category
              ? "text-primary font-semibold"
              : "hover:text-primary hover:scale-125 hover:font-semibold"
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </h3>
      ))}
    </div>
  );
};

export default FilterBar;
