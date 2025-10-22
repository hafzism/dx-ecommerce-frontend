import React from "react";
import Footer from "./Footer";
import heroimg from "../assets/hero_img-DOCOb6wn.jpg";
import LatestCollection from "./LatestCollection";
import OurPolicy from "./OurPolicy";
import ExploreCategories from "./ExploreCategories";
import HeroSection from "./HeroSection";
import CustomerTestimonials from "./CustomerTestimonials";

const HomeFull = () => {
  return (
    <div>
      <HeroSection></HeroSection>
        <LatestCollection></LatestCollection>
        <ExploreCategories></ExploreCategories>
        <CustomerTestimonials></CustomerTestimonials>
        <OurPolicy></OurPolicy>
        <Footer></Footer>
      </div>
  );
};

export default HomeFull;
