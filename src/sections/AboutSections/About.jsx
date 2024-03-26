import React from "react";

function About() {
  return (
    <section className="about my-2 sm:my-16 py-1 sm:py-8">
      <div className="container-wrapper">
        <div className=" flex flex-col-reverse sm:flex-row justify-between gap-4 ">
          <div className=" max-w-lg w-full">
            <img src="images/qrcode.png" alt="" className=" mb-4 mx-auto" />
            <div className=" flex justify-center  items-center">
              <img src="images/google.png" alt="" />
              <img src="images/apple.png" alt="" />
            </div>
          </div>

          <div className=" mb-2">
            <img src="images/logo.png" alt="" className=" mb-4" />

            <h2 className=" font-sohaBold text-3xl sm:text-5xl py-2 mb-2">
              About LeedixPay
            </h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
              LEEDIXPAY is an all-in-one ecosystem that enables individuals,
              organizations, merchants, and e-commerce businesses to send and
              receive payments securely and easily. Additionally, our platform
              offers tailored training programs to develop skills in various
              areas. Furthermore, we provide decentralized lending and borrowing
              solutions that are easily accessible. Whether you have a website
              or not, create your LEEDIXPAY account today and start evolving
              with us. Receive your payments directly to your mobile money
              account, bank account, or cryptocurrency wallet anywhere in the
              world, starting now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
