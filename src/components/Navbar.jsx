import { Link } from "react-router-dom";

import Typography from "./Typography";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useTranslation, initReactI18next } from 'react-i18next';

import LanguageSwitchers from "./LanguageDropdown";


// i18next.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslation },
//     fr: { translation: frTranslation }
//   },
//   lng: 'en', // default language
//   fallbackLng: 'en',
//   interpolation: { escapeValue: false }
// })

export default function Navbar() {
  const [isSidebarOpen, setSidebarVisibility] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const closeSidebar = () => setSidebarVisibility(false);
  const openSidebar = () => setSidebarVisibility(true);

  return (
    <nav className="  py-[2rem] ">
      <header className=" relative">
        <div
          className="container-wrapper h-[72px] flex items-center justify-between pt-0 sm:pt-8
        "
        >
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Leedixpay"
              width="180px"
              height="72px"
              className="cursor-pointer"
              
            />
          </Link>

          <button
            onClick={isSidebarOpen ? closeSidebar : openSidebar}
            className="flex lg:hidden text-black text-3xl"
          >
            {isSidebarOpen ? <MdClose /> : <AiOutlineMenu />}
          </button>

          <aside
            className={twMerge(
              "max-lg:fixed bottom-0 right-0 max-lg:w-[320px] max-lg:h-[calc(100vh-150px)] max-lg:bg-white   flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-lg:text-black lg:[&>*]:text-black/60 [&>*]:tracking-[1px] max-lg:p-5 max-lg:[&>a]:py-2 max-lg:[&>a]:border-b max-lg:[&>a]:px-3 max-lg:[&>a]:mb-2 max-lg:[&>a]:uppercase transition-all duration-200 translate-x-[320px] lg:translate-x-0 z-[1000] max-lg:overflow-y-auto",
              isSidebarOpen ? "translate-x-0" : null
            )}
          >
            <Typography
              as={Link}
              to='/'
              variant="sm"
              className="font-medium cursor-pointer text-sm font-sohaMed hover:underline"
              onClick={() => setSidebarVisibility(false)}
            >
              Home
            </Typography>
            <Typography
              as={Link}
              to='/about-us'
              variant="sm"
              className="font-medium cursor-pointer text-sm font-sohaMed hover:underline"
              onClick={() => setSidebarVisibility(false)}
            >
              About
            </Typography>
            <Typography
              as={Link}
              to='/'
              variant="sm"
              className="font-medium cursor-pointer text-sm font-sohaMed hover:underline"
              onClick={() => setSidebarVisibility(false)}
            >
              Services
            </Typography>
          
            <Typography
             
            
             variant="sm"
             className="font-medium cursor-pointer text-sm font-sohaMed hover:underline"
         
           >
            <LanguageSwitchers changeLanguage={changeLanguage}/>
           </Typography>
            <Typography
             
            
              variant="sm"
              className="font-medium cursor-pointer text-sm font-sohaMed"
          
            >
             {/* <LanguageDropdown/> */}
            </Typography>
            <Typography
             
            
             variant="sm"
             className="font-medium cursor-pointer text-sm font-sohaMed"
         
           >
            {/* <LanguageDropdown/> */}
           </Typography>
          <div className="ml-[8rem] flex gap-4 items-center">
          <Typography
              as={Link}
              to='/'
              variant="sm"
              className="font-medium cursor-pointer text-sm font-sohaMed underline "
              onClick={() => setSidebarVisibility(false)}
            >
              Login
            </Typography>

            <button className=" btn-nav  px-2 sm:px-4 py-3  ">
              <span className="text-white font-sohaBold font-bold text-base sm:text-xs hover:underline">
                REGISTER NOW
              </span>
            </button>
          </div>
          </aside>
        </div>
      </header>
    </nav>
  );
}
