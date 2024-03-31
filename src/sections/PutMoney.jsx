import React from "react";
import PresaleBox from "../components/PresaleBox";

function PutMoney() {
  return (
    <section className=" -mt-0 sm:-mt-28">
      <div className="container-wrapper">
        <div className=" flex  flex-col sm:flex-row justify-between gap-2 items-center">
          <div className=" max-w-lg w-full">
            {/* <PresaleBox /> */}
            <img src="images/world.png" alt="" className=" h-[350px]" />
          </div>

          <div>
            <img src="images/logo.png" alt="" className=" mb-4 sm:mt-0 mt-4" />

            <h2 className=" font-sohaBold text-3xl sm:text-5xl py-2 mb-4 lh-1_5">
              Invest your money in the best ecosystem <br /> and let it work for
              you.
            </h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
              The Leedixpay ecosystem is comprehensive and offers you better
              returns on investment with its <br /> tremendous potential. Buy now and
              start your journey to success. You have everything <br /> to gain, with
              no volatility risk as you can quickly convert it to stablecoin on
              our platform whenever you wish.
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 items-center mt-14">
              <p className=" font-sohaReg text-3xl">How to buy LDP</p>

              <button className="btn-hero px-12 py-2 font-sohaBold text-lg text-white">
                {" "}
                Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PutMoney;
