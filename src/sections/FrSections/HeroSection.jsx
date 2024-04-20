import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

import Typography from "../../components/Typography";

export default function HeroSection() {
  return (
    <>
      <section className=" ">
        <div className="container-wrapper py-6 flex flex-col-reverse  lg:grid lg:grid-cols-[1fr_.7fr] gap-10  justify-between relative pt-[3%] ">
          <div>
            <Typography className="text-[32px] xl:text-[45px]   max-sm:mb-4">
              <span className=" font-sohaBold lh-0-5">
                Envoyez, encaissez et recevez de l'argent facilement et en toute
                sécurité dans le monde entier, tout en améliorant vos
                compétences.
              </span>
            </Typography>

            <Typography className=" xl:text-[0.9rem] font-medium font-sohaReg lh-1_9  mb-8">
              LEEDIXPAY est un écosystème tout-en-un qui permet aux
              particuliers, aux organisations, aux commerçants et aux
              entreprises de commerce électronique d'envoyer et de recevoir des
              paiements facilement et en toute sécurité. De plus, notre
              plateforme propose des programmes de formation sur mesure pour
              développer des compétences dans divers domaines. De plus, nous
              proposons des solutions de prêt et d’emprunt décentralisées et
              facilement accessibles. Que vous ayez un site internet ou non,
              créez votre compte LEEDIXPAY dès aujourd'hui et commencez à
              évoluer avec nous. Recevez vos paiements directement sur votre
              compte d'argent mobile, votre compte bancaire ou votre
              portefeuille de crypto-monnaie partout dans le monde, dès
              maintenant.
            </Typography>

            <div className="  my-2">
              <p className=" font-sohaReg text-lg mb-3">
                Essayez l'application maintenant !
              </p>
              <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="text"
                  className="  hero-input w-full sm:w-[270px] h-[60px] sm:h-[60px] px-4"
                  placeholder="your@gmail.com"
                />
                <a
                  href="/"
                  className="btn-hero text-white px-6 py-4 text-base font-sohaBold w-full sm:w-auto"
                >
                  ABONNEZ-VOUS MAINTENANT
                </a>
                <a
                  href="/"
                  className="btn-hero text-white px-6 py-4 text-base font-sohaBold w-full sm:w-auto"
                >
              Buy now
                </a>
              </div>
              <p className=" flex  gap-2 items-center my-2">
                <input type="checkbox" />
                <span className=" text-xs opacity-70">
                  Je souhaite recevoir la newsletter
                </span>
              </p>

              <div className=" flex items-center gap-4 mt-8">
                <a href="/" className=" text-xl hover:text-[#1a4093]">
                  <BsTwitterX />
                </a>
                <a href="/" className=" text-xl hover:text-[#1a4093]">
                  <BsInstagram />
                </a>

                <a href="/" className=" text-xl hover:text-[#1a4093]">
                  <BsFacebook />
                </a>

                <a href="/" className=" text-xl hover:text-[#1a4093]">
                  <FaLinkedinIn />
                </a>
                <a href="/" className=" text-xl hover:text-[#1a4093]">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          <img
            src="images/phone.png"
            alt=""
            className="h-[300px] sm:h-[80%] mx-auto"
          />
        </div>
      </section>
    </>
  );
}
