import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <section className=" bg-footer py-6 px-4">
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row gap-4  justify-between items-center">
          <div>
            <img
              src="images/logo2.png"
              alt=""
              className=" h-auto sm:h-[50px] w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <div className="bg-white h-[1px] w-44"></div>
            <div className=" flex items-center gap-4 text-white">
              <a href="https://twitter.com/LEEDIXPAY" className=" text-xl  hover:text-[#1a4093]">
                <BsTwitterX />
              </a>
              {/* <a href="/" className=" text-xl hover:text-[#1a4093]">
                <BsInstagram />
              </a> */}

              <a href="https://www.facebook.com/Leedixpay?mibextid=hu50Ix" className=" text-xl hover:text-[#1a4093]">
                <BsFacebook />
              </a>

              {/* <a href="/" className=" text-xl hover:text-[#1a4093]">
                <FaLinkedinIn />
              </a> */}
              <a href="https://t.me/leedixpayapp" className=" text-xl hover:text-[#1a4093]">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className=" flex  justify-between flex-col  sm:flex-row items-center py-8">
          <div className=" flex justify-between  gap-2">
            <img src="images/google.png" alt="" />
            <img src="images/apple.png" alt="" />
            <img src="images/qr1.png" alt="" className=" hidden sm:block" />
          </div>
          <div className=" grid grid-cols-2 sm:flex flex-col sm:flex-row justify-between gap-10 mt-8 sm:mt-0">
            <div className=" text-white">
              <h2 className=" text-white font-sohaBold text-xl text-center mb-3">
                Useful Links
              </h2>

              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">
                Home
              </p>
              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">Invest</p>
              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">
                About
              </p>
              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">
                Services
              </p>
            </div>
            <div className=" text-white">
              <h2 className=" text-white font-sohaBold text-xl text-center mb-3">
               Product
              </h2>

              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">
                Sitemap
              </p>
              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">Crypto</p>
              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">
                Video Course
              </p>
              <p className="mb-1 hover:text-[#1a4093] cursor-pointer">
                Pdf Course
              </p>
            </div>
    
          </div>
        </div>

        <div className=" pr-16 ">
          <h3 className=" text-white font-sohaReg text-base">
            Disclaimer: Products within the Leedixpay ecosystem are subject to <br />
            specific terms of use. Please review our terms and conditions before <br />
            engaging in any investment or transaction.
          </h3>

          <p className=" mt-8 text-white opacity-75">
            © 2024 Leedixpay. All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
