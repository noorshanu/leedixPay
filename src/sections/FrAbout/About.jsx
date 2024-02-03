import React from "react";

function About() {
  return (
    <section className="about my-2 sm:my-16 py-1 sm:py-8">
      <div className="container-wrapper">
        <div className=" flex flex-col-reverse sm:flex-row justify-between gap-4 ">
          <div className=" max-w-lg w-full">
            <img src="/images/qrcode.png" alt="" className=" mb-4 mx-auto" />
            <div className=" flex justify-center  items-center">
              <img src="/images/google.png" alt="" />
              <img src="/images/apple.png" alt="" />
            </div>
          </div>

          <div className=" mb-2">
            <img src="/images/logo.png" alt="" className=" mb-4" />

            <h2 className=" font-sohaBold text-3xl sm:text-5xl py-2 mb-2">
              À propos de LeedixPay
            </h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
              LeedixPay est un point de vente sécurisé et rapide pour les
              magasins physiques et les boutiques en ligne qui <br />
              accepte Ethereum et de nombreuses autres pièces et les convertit
              instantanément en Dai <br /> stablecoin pour que vous n'ayez pas à
              le faire vous inquiétez de la volatilité. CONTACTEZ-NOUS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
