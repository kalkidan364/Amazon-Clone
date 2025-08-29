import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import CarouselEffect from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
const Landing = () => {
  return (
    <div>
      <LayOut>
        <CarouselEffect />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
};

export default Landing;
