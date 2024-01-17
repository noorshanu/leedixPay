import OutsideClickDetector from "hooks/OutsideClickDetector";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChevronDown } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import generateLanguage from "utils/generateLanguage";

// const languages = [
//   { code: "en", name: "English", flag: "https://flagsapi.com/GB/flat/64.png" },
//   { code: "ar", name: "Arabic", flag: "https://flagsapi.com/SA/flat/64.png" },
//   {
//     code: "bg",
//     name: "Bulgarian",
//     flag: "https://flagsapi.com/BG/flat/64.png",
//   },
//   {
//     code: "zh-Hans",
//     name: "Chinese (simplified)",
//     flag: "https://flagsapi.com/CN/flat/64.png",
//   },
//   {
//     code: "zh-Hant",
//     name: "Chinese (traditional)",
//     flag: "https://flagsapi.com/TW/flat/64.png",
//   },
//   { code: "cs", name: "Czech", flag: "https://flagsapi.com/CZ/flat/64.png" },
//   { code: "nl", name: "Dutch", flag: "https://flagsapi.com/NL/flat/64.png" },
//   { code: "fr", name: "French", flag: "https://flagsapi.com/FR/flat/64.png" },
//   { code: "de", name: "German", flag: "https://flagsapi.com/DE/flat/64.png" },
//   { code: "el", name: "Greek", flag: "https://flagsapi.com/GR/flat/64.png" },
//   {
//     code: "hu",
//     name: "Hungarian",
//     flag: "https://flagsapi.com/HU/flat/64.png",
//   },
//   {
//     code: "id",
//     name: "Indonesian",
//     flag: "https://flagsapi.com/ID/flat/64.png",
//   },
//   { code: "it", name: "Italian", flag: "https://flagsapi.com/IT/flat/64.png" },
//   { code: "ja", name: "Japanese", flag: "https://flagsapi.com/JP/flat/64.png" },
//   { code: "ko", name: "Korean", flag: "https://flagsapi.com/KR/flat/64.png" },
//   { code: "fa", name: "Persian", flag: "https://flagsapi.com/IR/flat/64.png" },
//   { code: "pl", name: "Polish", flag: "https://flagsapi.com/PL/flat/64.png" },
//   {
//     code: "pt",
//     name: "Portuguese",
//     flag: "https://flagsapi.com/PT/flat/64.png",
//   },
//   { code: "ro", name: "Romanian", flag: "https://flagsapi.com/RO/flat/64.png" },
//   { code: "ru", name: "Russian", flag: "https://flagsapi.com/RU/flat/64.png" },
//   { code: "sk", name: "Slovak", flag: "https://flagsapi.com/SK/flat/64.png" },
//   { code: "es", name: "Spanish", flag: "https://flagsapi.com/ES/flat/64.png" },
//   { code: "th", name: "Thai", flag: "https://flagsapi.com/TH/flat/64.png" },
//   { code: "tr", name: "Turkish", flag: "https://flagsapi.com/TR/flat/64.png" },
//   {
//     code: "vi",
//     name: "Vietnamese",
//     flag: "https://flagsapi.com/VN/flat/64.png",
//   },
// ];

const languages = [
  { code: "en", name: "English", flag: "https://flagsapi.com/GB/flat/64.png" },
  { code: "ar", name: "Arabic", flag: "https://flagsapi.com/SA/flat/64.png" },
  {
    code: "zh",
    name: "Chinese",
    flag: "https://flagsapi.com/CN/flat/64.png",
  },
  { code: "fr", name: "French", flag: "https://flagsapi.com/FR/flat/64.png" },
  { code: "de", name: "German", flag: "https://flagsapi.com/DE/flat/64.png" },
  {
    code: "id",
    name: "Indonesian",
    flag: "https://flagsapi.com/ID/flat/64.png",
  },
  { code: "it", name: "Italian", flag: "https://flagsapi.com/IT/flat/64.png" },
  { code: "ko", name: "Korean", flag: "https://flagsapi.com/KR/flat/64.png" },
  { code: "ru", name: "Russian", flag: "https://flagsapi.com/RU/flat/64.png" },
  { code: "es", name: "Spanish", flag: "https://flagsapi.com/ES/flat/64.png" },
  { code: "th", name: "Thai", flag: "https://flagsapi.com/TH/flat/64.png" },
  { code: "tr", name: "Turkish", flag: "https://flagsapi.com/TR/flat/64.png" },
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
        <div className="lg:absolute top-full right-0 lg:w-[156px] h-[250px] overflow-y-auto bg-text-2 border border-white/20">
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
