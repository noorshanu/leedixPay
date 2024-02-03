import React from "react";

function Lexipay() {
  return (
    <section>
      <div className=" container-wrapper mx-auto">
        <div className=" flex  justify-between flex-col sm:flex-row ">
          <div>
            <h1 className=" font-sohaBold text-[40px] font-bold mb-[3rem]">At LeedixPay,</h1>

            <p className=" max-w-[640px] text-base font-sohaReg">
            nous croyons en l'importance de l'autosuffisance, de la continuité
              l'apprentissage et l'innovation. Nous encourageons tout le monde à saisir
              opportunités offertes par nos plateformes et accepter le changement pour un
              Meilleur futur. Rejoignez-nous aujourd'hui et ensemble, construisons un monde
              où les rêves deviennent réalité, un transfert à la fois. Préparez-vous à
              lancez-vous dans une aventure passionnante avec LeedixPay !
            </p>
          </div>

          <div>
            <img src="images/iphone.png" alt="" className=" h-auto sm:h-[90%]  mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lexipay;
