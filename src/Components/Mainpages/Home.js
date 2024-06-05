import React from "react";
import Categories from "./Categories";
import SlideCard from "./SlideCard";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <Categories />
          <SlideCard />
        </div>
      </section>
    </>
  );
};

export default Home;
