import React from "react";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import PutMoney from "../sections/PutMoney";
import Cta from "../sections/Cta";
import AboutFun from "../sections/AboutFun";
import Footer from "../sections/Footer";
import Lexipay from "../sections/Lexipay";
import Invest from "../sections/Invest";
import Features from "../sections/Features";
import BuyNowSection from "../components/BuyNowSection";

function BuyNow() {
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
      <BuyNowSection/>
    </div>
    

    <Footer />
  </div>
</>
  )
}

export default BuyNow