import React from "react";

function AboutFun() {
  return (
    <section className=" mb-[6rem] mt-[3rem]">
      <div className="  container-wrapper p-6">
        <div className=" flex justify-evenly flex-col sm:flex-row items-center mb-[7rem]">
          <div className=" text-center mb-8 sm:mb-2">
            <img
              src="images/icons/icon1.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
              LeedixPay
            </h2>
            <p>
            Simplify international money transfers,    <br /> eliminating excessive fees and delays.
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon1.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            FIAT & CRYPTO EXCHANGE

            </h2>
            <p>
            Access cryptocurrencies easily in   <br />a world embracing technological
            </p>
          </div>

          <div className=" text-center  mb-2 sm:mb-2">
            <img
              src="images/icons/icon3.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            RAPID-BORROW
            </h2>
            <p>
            Quickly borrow money online    <br /> with accessible loan solutions.
            </p>
          </div>
        </div>

        <div className=" flex justify-evenly flex-col sm:flex-row items-center">
        <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon4.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            ONLINE MERCHANTS
            </h2>
            <p>
            Earn passive income by becoming an agent in our network,   <br /> supported by our growth-oriented platform.
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon6.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            MARKETPLACE
            </h2>
            <p>
            Buy, sell, and exchange quality products at   <br /> competitive prices with our assistance.
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon7.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            RAPID-RETAIL
            </h2>
            <p>
            Facilitate cashing out for your business worldwide,    <br /> overcoming online payment challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFun;
