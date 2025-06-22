import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OrderPolicy from "../components/OrderPolicy";
import NewlesterBox from "../components/NewlesterBox";
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OrderPolicy />
      <NewlesterBox />
    </div>
  );
};

export default Home;
