import { BsTwitterX ,BsInstagram,BsFacebook } from "react-icons/bs";
import { FaLinkedinIn,FaTelegram  } from "react-icons/fa6";

import Typography from "../../components/Typography";

export default function HeroSection() {
  return (
    <>
      <section className=" ">
        <div className="container-wrapper py-6 flex flex-col-reverse  lg:grid lg:grid-cols-[1fr_.7fr] gap-10  justify-between relative pt-[3%] ">
          <div>
            <Typography className="text-[32px] xl:text-[45px]   max-sm:mb-4">
              <span className=" font-sohaBold lh-0-5">Donner vie aux rêves, un transfert à la fois</span>
            </Typography>

            <Typography className=" xl:text-[0.9rem] font-medium font-sohaReg lh-1_9  mb-8">
            LeedixPay est un point de vente sécurisé et rapide pour les magasins physiques et les boutiques en ligne qui accepte Ethereum et de nombreuses autres pièces et les convertit instantanément en Dai stablecoin afin que vous n'ayez pas à vous soucier de la volatilité. CONTACTEZ-NOUS !
            </Typography>

            <div className="  my-2">
              <p className=" font-sohaReg text-lg mb-3">Essayez l'application maintenant !</p>
              <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input type="text" className="  hero-input w-full sm:w-[370px] h-[60px] sm:h-[60px] px-4" placeholder="your@gmail.com" />
                <a href="/" className="btn-hero text-white px-12 py-4 text-base font-sohaBold w-full sm:w-auto">ABONNEZ-VOUS MAINTENANT</a>

              </div>
              <p className=" flex  gap-2 items-center my-2">
                <input type="checkbox" />
                <span className=" text-xs opacity-70" >Je souhaite recevoir la newsletter</span>
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

          <img src="images/phone.png" alt="" className="h-[300px] sm:h-[80%] mx-auto" />
        </div>
      </section>
    </>
  );
}
