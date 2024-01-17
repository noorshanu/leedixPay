import React from "react";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import PutMoney from "../sections/PutMoney";
import Cta from "../sections/Cta";
import AboutFun from "../sections/AboutFun";
import Footer from "../sections/Footer";
function Home() {
  return (
    <>
      <div className=" ">
    
        <div className="mb-2 relative z-10">
        <img
          src="/images/mask.png"
          className="absolute top-0 right-0 w-auto h-full  -z-10 max-lg:hidden"
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

        <Footer/>
      </div>
    </>
  );
}

export default Home;
