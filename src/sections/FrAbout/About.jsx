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
            LEEDIXPAY est un écosystème tout-en-un qui permet aux individus,
              organisations, commerçants et entreprises de commerce électronique pour envoyer et
              recevez des paiements facilement et en toute sécurité. De plus, notre plateforme
              propose des programmes de formation sur mesure pour développer des compétences dans divers
              zones. De plus, nous proposons des prêts et des emprunts décentralisés
              des solutions facilement accessibles. Que vous ayez un site Web
              ou pas, créez votre compte LEEDIXPAY aujourd'hui et commencez à évoluer
              avec nous. Recevez vos paiements directement sur votre mobile money
              compte, compte bancaire ou portefeuille de crypto-monnaie n'importe où dans le
              monde, à partir de maintenant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
