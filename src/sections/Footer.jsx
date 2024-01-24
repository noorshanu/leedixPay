import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <section className=" bg-footer py-6 px-4">
      <div className=" container-wrapper">
        <div className=" flex flex-col sm:flex-row gap-4  justify-between items-center">
          <div>
            <img src="images/logo2.png" alt="" className="h-[50px] w-full" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <div className="bg-white h-[1px] w-44"></div>
            <div className=" flex items-center gap-4 text-white">
              <a href="/" className=" text-xl ">
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

        <div className=" flex  justify-between flex-col  sm:flex-row items-center py-8">
          <div className=" flex justify-between  gap-2">
            <img src="images/google.png" alt="" />
            <img src="images/apple.png" alt="" />
            <img src="images/qr1.png" alt="" className=" hidden sm:block" />
          </div>
          <div className=" grid grid-cols-2 sm:flex flex-col sm:flex-row justify-between gap-10 mt-8 sm:mt-0">
            <div className=" text-white">
              <h2 className=" text-white font-sohaBold text-xl text-center mb-3">
                Products
              </h2>

              <p className="mb-1">Sitemap</p>
              <p className="mb-1">Crypto</p>
              <p className="mb-1">Video Course</p>
              <p className="mb-1">Pdf Course</p>
            </div>
            <div className=" text-white">
              <h2 className=" text-white font-sohaBold text-xl text-center mb-3">
                Products
              </h2>

              <p className="mb-1">Sitemap</p>
              <p className="mb-1">Crypto</p>
              <p className="mb-1">Video Course</p>
              <p className="mb-1">Pdf Course</p>
            </div>
            <div className=" text-white">
              <h2 className=" text-white font-sohaBold text-xl text-center mb-3">
                Products
              </h2>

              <p className="mb-1">Sitemap</p>
              <p className="mb-1">Crypto</p>
              <p className="mb-1">Video Course</p>
              <p className="mb-1">Pdf Course</p>
            </div>
          </div>
        </div>

        <div className=" pr-16 ">
          <h3 className=" text-white font-sohaReg text-base">
            The purpose of this website is solely to display information
            regarding the products and services available on the Crypto.com App.
            It is not intended to offer access to any <br /> of such products
            and services. You may obtain access to such products and services on
            the Crypto.com App. <br /> Please note that the availability of the
            products and services on the Crypto.com App is subject to
            jurisdictional limitations. Crypto.com may not offer certain
            products, features <br />
            and/or services on the Crypto.com App in certain jurisdictions due
            to potential or actual regulatory restrictions.
          </h3>

          <p className=" mt-8 text-white opacity-75">© 2024 Leedixpay. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
