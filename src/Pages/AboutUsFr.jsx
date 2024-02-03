import React from "react";

import Hero from "../sections/AboutSections/Hero";
import About from "../sections/FrAbout/About";
import RoadmapCards from "../components/RoadmapCards";
import Tokenomics from "../sections/Tokenomics";
import Footer from "../sections/Footer";
import Team from "../sections/FrAbout/Team";

import Navbar2 from "../components/Navbar2";
import Roadmap from "../sections/FrAbout/Roadmap";

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
