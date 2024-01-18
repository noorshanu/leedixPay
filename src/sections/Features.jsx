import React from "react";
import Marquee from "react-fast-marquee";

function Features() {
  return (
    <section className=" mb-[4rem] mt-[2rem]">
      <div>
        <Marquee pauseOnHover={true} loop={0}>
          <img src="images/fetch/f1.png" alt="" className=" m-4 h-[320px]" />
          <img src="images/fetch/f2.png" alt="" className=" m-4 h-[320px]" />
          <img src="images/fetch/f3.png" alt=""  className=" m-4 h-[320px]"/>
          <img src="images/fetch/f4.png" alt="" className=" m-4 h-[320px]" />
          <img src="images/fetch/f5.png" alt="" className=" m-4 h-[320px]" />
        </Marquee>
      </div>
    </section>
  );
}

export default Features;
