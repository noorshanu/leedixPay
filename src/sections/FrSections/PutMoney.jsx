import React from "react";
import PresaleBox from "../../components/PresaleBox";

function PutMoney() {
  return (
    <section className=" -mt-0 sm:-mt-28">
      <div className="container-wrapper">
        <div className=" flex  flex-col sm:flex-row justify-between gap-10 items-center">
          <div className=" max-w-lg w-full">
            {/* <PresaleBox /> */}
            <img src="images/world.png" alt="" className=" h-[350px]" />
          </div>

          <div>
            <img src="images/logo.png" alt="" className=" mb-4 sm:mt-0 mt-4" />

            <h2 className=" font-sohaBold text-3xl sm:text-5xl py-2 mb-4 lh-1_5">
            
Investissez votre argent dans le meilleur écosystème <br /> et laissez-le travailler pour vous.
            </h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
            L'écosystème Leedixpay est complet et vous offre mieux
              retours sur investissement avec son <br /> énorme potentiel. Achetez maintenant et
              commencez votre voyage vers le succès. Vous avez tout <br /> à gagner, avec
              aucun risque de volatilité car vous pouvez le convertir rapidement en stablecoin sur
              notre plateforme quand vous le souhaitez.
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 items-center mt-14">
              <p className=" font-sohaReg text-3xl">Comment acheter du LDP</p>

              <button className="btn-hero px-12 py-2 font-sohaBold text-lg text-white">
                {" "}
                Papier blanc
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PutMoney;
