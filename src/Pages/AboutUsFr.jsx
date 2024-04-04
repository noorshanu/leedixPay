import React from "react";

import Hero from "../sections/AboutSections/Hero";
import About from "../sections/FrAbout/About";

import Tokenomics from "../sections/FrAbout/Tokenomics";
import Footer from "../sections/Footer";
import Team from "../sections/FrAbout/Team";

import Navbar2 from "../components/Navbar2";
import Roadmap from "../sections/FrAbout/Roadmap";
import RoadmapCards from "../sections/FrAbout/RoadmapCards";


function AboutUs() {
  return <>
  <div>
   <Navbar2/>
    <Hero/>
    <About/>
    <Roadmap/>
    <RoadmapCards/>

    <Tokenomics/>
    {/* <Team/> */}
    <Footer/>
  </div>
  
  </>;
}

export default AboutUs;
