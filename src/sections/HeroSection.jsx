import { BsTwitterX ,BsInstagram,BsFacebook } from "react-icons/bs";
import { FaLinkedinIn,FaTelegram  } from "react-icons/fa6";

import Typography from "../components/Typography";

export default function HeroSection() {
  return (
    <>
      <section className=" pb-0 sm:pb-8 ">
        <div className="container-wrapper py-6 flex flex-col-reverse  lg:grid lg:grid-cols-[1fr_.7fr] gap-10  justify-between relative pt-[3%] ">
          <div>
            <Typography className="text-[32px] xl:text-[45px]   max-sm:mb-4">
              <span className=" font-sohaBold lh-0-5">Easily and securely send, cash out, and receive money globally, all while enhancing your skills.</span>
            </Typography>

            <Typography className=" xl:text-[0.9rem] font-medium font-sohaReg lh-1_9  mb-8">
            LEEDIXPAY is an all-in-one ecosystem that enables individuals, organizations, merchants, and e-commerce businesses to send and receive payments securely and easily. Additionally, our platform offers tailored training programs to develop skills in various areas. Furthermore, we provide decentralized lending and borrowing solutions that are easily accessible. Whether you have a website or not, create your LEEDIXPAY account today and start evolving with us. Receive your payments directly to your mobile money account, bank account, or cryptocurrency wallet anywhere in the world, starting now.
            </Typography>

            <div className="  my-2">
              <p className=" font-sohaReg text-lg mb-3">Try the App now!</p>
              <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input type="text" className="  hero-input w-full sm:w-[370px] h-[60px] sm:h-[60px] px-4" placeholder="your@gmail.com" />
                <a href="/" className="btn-hero text-white px-12 py-4 text-base font-sohaBold w-full sm:w-auto">SUBSCRIBE NOW</a>

              </div>
              <p className=" flex  gap-2 items-center my-2">
                <input type="checkbox" />
                <span className=" text-xs opacity-70" >I want to receive the news letter</span>
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
