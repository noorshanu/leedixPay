import React from "react";

function AboutFun() {
  return (
    <section className=" mb-[6rem] mt-[3rem]" id="services">
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
              Simplifiez les transferts d'argent internationaux, <br /> en
              éliminant les frais et les retards excessifs.
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon1.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
              ÉCHANGE FIAT ET CRYPTO
            </h2>
            <p>
              Accédez facilement aux crypto-monnaies dans <br />
              un monde en pleine mutation technologique
            </p>
          </div>

          <div className=" text-center  mb-2 sm:mb-2">
            <img
              src="images/icons/icon3.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            EMPRUNT RAPIDE
            </h2>
            <p>
            Empruntez rapidement de l'argent en ligne <br /> grâce à des solutions de prêt accessibles.
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
            COMMERÇANTS EN LIGNE
            </h2>
            <p>
            Gagnez un revenu passif en devenant un agent de notre réseau, <br /> soutenu par notre plateforme orientée croissance.
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon6.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            MARCHÉ
            </h2>
            <p>
            Achetez, vendez et échangez des produits de qualité à <br /> des prix compétitifs avec notre aide.
            </p>
          </div>

          <div className=" text-center  mb-8 sm:mb-2">
            <img
              src="images/icons/icon7.png"
              alt=""
              className=" mx-auto mb-5"
            />
            <h2 className=" font-sohaBold text-xl sm:text-3xl font-bold mb-1">
            DÉTAIL RAPIDE
            </h2>
            <p>
            Facilitez les retraits d'argent pour votre entreprise dans le monde entier, <br /> en surmontant les défis liés au paiement en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFun;
