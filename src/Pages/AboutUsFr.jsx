import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/AboutSections/Hero";
import About from "../sections/AboutSections/About";
import RoadmapCards from "../components/RoadmapCards";
import Tokenomics from "../sections/Tokenomics";
import Footer from "../sections/Footer";
import Team from "../sections/AboutSections/Team";
import Roadmap from "../sections/Roadmap";
import Navbar2 from "../components/Navbar2";

function AboutUs() {
  return <>
  <div>
   <Navbar2/>
    <Hero/>
    <About/>
    <Roadmap/>
    <RoadmapCards/>
    <Tokenomics/>
    <Team/>
    <Footer/>
  </div>
  
  </>;
}

export default AboutUs;
