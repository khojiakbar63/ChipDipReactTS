import React from "react";
import {
  Hero,
  Application,
  PopCategories,
  Bestsellers,
  BestOffers,
  GainingPopularity,
  Distributions,
  NewsVideos,
  Description,
} from "../../components";
import "./_style.scss";

export const Home: React.FC = () => {
  return <> 
    <Hero />
    <Application />
    <PopCategories />
    <Bestsellers />
    <BestOffers />
    <GainingPopularity />
    <Distributions />
    <NewsVideos/>
    <Description />
  </>;
};
