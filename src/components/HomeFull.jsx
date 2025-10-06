import React from "react";
import Footer from "./Footer";
import heroimg from "../assets/hero_img-DOCOb6wn.jpg";
import LatestCollection from "./LatestCollection";
import OurPolicy from "./OurPolicy";
import ExploreCategories from "./ExploreCategories";

const HomeFull = () => {
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="flex flex-col sm:flex-row border border-gray-400">
          <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
              <h1 className="prata-regular text-4xl pb-20 font-bold">
                WELCOME TO BUYEAZY!
              </h1>
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className=" font-medium text-sm md:text-base">OUR BESTSELLERS</p>
              </div>
              <h1 className="prata-regular text-3xl sm:py-3 lg:text-4xl leading-relaxed">
                Latest Arrivals
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
              </div>
            </div>
          </div>
          <img className="w-full sm:w-1/2" src={heroimg}></img>
        </div>
        <LatestCollection></LatestCollection>
        <ExploreCategories></ExploreCategories>
        <OurPolicy></OurPolicy>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeFull;
