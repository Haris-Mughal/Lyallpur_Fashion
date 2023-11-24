import Carousel from "./Carousel";
import React from "react";
import Categories from "./Categories";
import Filtering from "./Filtering";
import HomeProducts from "./HomeProducts";


function index() {
  return (
    <main>
      <Carousel />
      <Categories/>
      <Filtering/>
      <HomeProducts/>
    </main>
  );
}

export default index;
