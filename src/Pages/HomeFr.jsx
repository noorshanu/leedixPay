import React from "react";
import HeroSection from "../sections/FrSections/HeroSection";
import Navbar from "../components/Navbar";
import PutMoney from "../sections/FrSections/PutMoney";
import Cta from "../sections/FrSections/Cta";
import AboutFun from "../sections/FrSections/AboutFun";
import Footer from "../sections/FrSections/Footer";
import Lexipay from "../sections/FrSections/Lexipay";
import Invest from "../sections/FrSections/Invest";
import Features from "../sections/Features";
function HomeFr() {
  return (
    <>
      <div className=" ">
    
        <div className="mb-2 relative z-10">
        <img
          src="/images/mask.png"
          className="absolute top-0 right-0 w-auto sm:h-[83.5%] h-[400px]  -z-10 "
          alt=""
        />
        <Navbar />
          <HeroSection />
        </div>
        <div className="mb-10">
          <PutMoney/>
        </div>

        <div className="mb-10">
         <Cta/>
        </div>

        <div className="mb-10">
       <AboutFun/>
        </div>

        <div className="mb-10">
       <Lexipay/>
        </div>
        <div className="mb-10">
       <Invest/>
       <Features/>
        </div>

        <Footer/>
      </div>
    </>
  );
}

export default HomeFr;
