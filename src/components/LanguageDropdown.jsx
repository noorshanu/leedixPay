import OutsideClickDetector from "../hooks/OutsideClickDetector";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronDown } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import generateLanguage from "../utils/generateLanguage";



const languages = [
  { code: "en", name: "English", flag: "https://flagsapi.com/GB/flat/64.png" },
  { code: "ar", name: "Arabic", flag: "https://flagsapi.com/SA/flat/64.png" },

  { code: "fr", name: "French", flag: "https://flagsapi.com/FR/flat/64.png" },


];

const DropdownItem = ({ text, flag, ...props }) => {
  return (
    <button
      {...props}
      className="p-2 flex items-center space-x-2 text-white text-left text-sm"
    >
      <img
        src={flag}
        alt="country-flag"
        className="flex flex-shrink-0 w-5 h-5 rounded-full border border-white object-cover"
      />

      <span>{text}</span>
    </button>
  );
};

export default function LanguageDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((val) => !val);

  const dropdownRef = OutsideClickDetector(
    closeDropdown,
    isDropdownOpen === true
  );

  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [languageState, setLanguageState] = useState(languages[0]);
  const params = useParams();

  function changeLanguage(value) {
    i18n.changeLanguage(value);
  }

  const chnageLanguageState = () => {
    const languageData = languages.find((item) =>
      item.code === i18n?.language ? item : null
    );

    if (languageData === undefined) {
      setLanguageState(languages[0]);
      changeLanguage("en");
      navigate(generateLanguage("en", location));
      return;
    }

    setLanguageState(languageData);
  };

  console.log(params.locale);

  useEffect(() => {
    // setLangCode(i18n?.language);
    // changeLanguage(i18n?.language);
    chnageLanguageState();
    changeLanguage(i18n?.language);
  }, [i18n?.language]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between max-lg:border max-lg:h-11 max-lg:px-4 max-lg:mt-8 space-x-1.5 py-1 relative max-lg:w-full"
      >
        <span className="flex space-x-2 items-center">
          <img
            src={languageState.flag}
            className="flex-shrink-0 w-5 h-5 flex object-cover lg:hidden rounded-full overflow-hidden border border-white/20"
            alt=""
          />

          <span className="text-sm font-medium uppercase">
            {languageState.code}
          </span>
        </span>

        <BsChevronDown className="hidden lg:block" />
      </button>

      {isDropdownOpen ? (
        <div className="lg:absolute top-full right-0 lg:w-[156px] h-[140px] overflow-y-auto bg-text-2 border bg-[#000] rounded-lg border-white/20">
          {languages.map((item, i) => (
            <DropdownItem
              key={i}
              text={item.name}
              onClick={() => {
                console.log(item.code);

                navigate(generateLanguage(item.code, location));
                changeLanguage(item.code);
                closeDropdown();
              }}
              flag={item.flag}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
