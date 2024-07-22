import React, { useState } from "react";
import NavBar from "../components/NavBar";
import FilterBar from "../components/partials/FilterBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { menu } from "../database/db";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu = menu.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="w-full">
      <div className="flex-col flex-no-wrap fixed top-0 z-10 flex w-full h-[18%] items-center justify-between bg-[#001D3D] py-2 select-none">
        <NavBar />
        <FilterBar setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="content pt-[30%] ">
        {filteredMenu.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            half={item.half}
            full={item.full}
            price={item.price}
            onePiece={item.onePiece}
            twoPiece={item.twoPiece}
            category={item.category}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
