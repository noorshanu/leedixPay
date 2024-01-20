import React from "react";

function Lexipay() {
  return (
    <section>
      <div className=" container-wrapper mx-auto">
        <div className=" flex  justify-between flex-col sm:flex-row ">
          <div>
            <h1 className=" font-sohaBold text-[40px] font-bold mb-[3rem]">At LeedixPay,</h1>

            <p className=" max-w-[640px] text-base font-sohaReg">
              we believe in the importance of self-sufficiency, continuous
              learning and innovation. We encourage everyone to seize the
              opportunities offered by our platforms and embrace change for a
              better future. Join us today and together, let’s build a world
              where dreams become reality, one transfer at a time. Get ready to
              embark on an exciting adventure with LeedixPay!
            </p>
          </div>

          <div>
            <img src="images/iphone.png" alt="" className=" h-[90%] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lexipay;
