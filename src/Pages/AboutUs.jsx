import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/AboutSections/Hero";
import About from "../sections/AboutSections/About";
import RoadmapCards from "../components/RoadmapCards";
import Tokenomics from "../sections/Tokenomics";
import Footer from "../sections/Footer";

function AboutUs() {
  return <>
  <div>
    <Navbar/>
    <Hero/>
    <About/>
    <RoadmapCards/>
    <Tokenomics/>
    <Footer/>
  </div>
  
  </>;
}

export default AboutUs;
