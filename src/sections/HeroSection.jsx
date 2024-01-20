import { BsTwitterX ,BsInstagram,BsFacebook } from "react-icons/bs";
import { FaLinkedinIn,FaTelegram  } from "react-icons/fa6";

import Typography from "../components/Typography";

export default function HeroSection() {
  return (
    <>
      <section className=" ">
        <div className="container-wrapper py-6 grid lg:grid-cols-[1fr_.7fr] gap-10  justify-between relative pt-[3%] ">
          <div>
            <Typography className="text-[32px] xl:text-[59px]   max-sm:mb-4">
              <span className=" font-sohaBold lh-1_3">Bringing Dreams to Life, One Transfer at a Time</span>
            </Typography>

            <Typography className=" xl:text-[18px] font-medium font-sohaReg lh-1_3  mb-8">
              LeedixPay is a secure and fast point of sale for physical stores
              and online shops that accepts Ethereum and many other coins and
              instantly converts them to Dai stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </Typography>

            <div className="  my-2">
              <p className=" font-sohaReg text-lg mb-3">Try the App now!</p>
              <div className=" flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input type="text" className="  hero-input w-auto sm:w-[370px] h-auto sm:h-[60px] px-4" placeholder="your@gmail.com" />
                <a href="/" className="btn-hero text-white px-12 py-4 text-base font-sohaBold">SUBSCRIBE NOW</a>

              </div>
              <p className=" flex  gap-2 items-center my-2">
                <input type="checkbox" />
                <span className=" text-xs opacity-70" >I want to receive the news letter</span>
              </p>
            
            <div className=" flex items-center gap-4 mt-8">
              <a href="/" className=" text-xl">
              <BsTwitterX />
              </a>
              <a href="/" className=" text-xl">
              <BsInstagram />
              </a>

              <a href="/" className=" text-xl">
              <BsFacebook />
              </a>

              <a href="/" className=" text-xl">
              <FaLinkedinIn />
              </a>
              <a href="/" className=" text-xl">
              <FaTelegram />
              </a>


            </div>
            </div>
          </div>

          <img src="images/phone.png" alt="" className="h-auto sm:h-[80%] mx-auto" />
        </div>
      </section>
    </>
  );
}