import React from "react";
import PresaleBox from "../../components/PresaleBox";

function PutMoney() {
  return (
    <section className=" -mt-0 sm:-mt-28">
      <div className="container-wrapper">
        <div className=" flex  flex-col sm:flex-row justify-between gap-10 items-center">
         <div className=" max-w-lg w-full">
        
        <PresaleBox/>
         </div>

          <div>
            <img src="images/logo.png" alt="" className=" mb-4 sm:mt-0 mt-4" />

            <h2 className=" font-sohaBold text-3xl sm:text-5xl py-2 mb-4 lh-1_5">Mettez votre argent <br /> travailler</h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
            LeedixPay est un point de vente sécurisé et rapide pour les magasins physiques et les boutiques en ligne qui <br />accepte Ethereum et de nombreuses autres pièces et
              les convertit instantanément en Dai <br /> stablecoin pour que vous n'ayez pas à le faire
              vous inquiétez de la volatilité. CONTACTEZ-NOUS
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 items-center mt-14">
                <p className=" font-sohaReg text-3xl">
                Comment acheter du LDP
                </p>

                <button className="btn-hero px-12 py-2 font-sohaBold text-lg text-white"> Papier blanc</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PutMoney;
