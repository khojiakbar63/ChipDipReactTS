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
  Spacer
} from "../../components";
import "./_style.scss";

export const Home: React.FC = () => {
  return <> 
  <Spacer className='h-40'/>
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
