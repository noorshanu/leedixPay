import React from "react";
import { useTranslation } from "react-i18next";

function AboutFun() {
  const { t } = useTranslation();
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
             {t(' You don’t need a special')} <br /> {t('device or skills')}
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon1.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            LeedixPay - Merchant

            </h2>
            <p>
            You don’t need a special <br /> device or skills
            </p>
          </div>

          <div className=" text-center  mb-2 sm:mb-2">
            <img
              src="images/icons/icon3.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            Digital Library
            </h2>
            <p>
            You don’t need a special <br /> device or skills
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
            Audiogram training
            </h2>
            <p>
              You don’t need a special <br /> device or skills
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon6.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            Videogram training
            </h2>
            <p>
              You don’t need a special <br /> device or skills
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon7.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            Training
            </h2>
            <p>
              You don’t need a special <br /> device or skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFun;
