import React, { useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const languages = [
  { to: "/en", name: "English", flag: "https://flagsapi.com/GB/flat/64.png" },
  { to: "/fr", name: "French", flag: "https://flagsapi.com/FR/flat/64.png" },
];

const DropdownItem = ({ text, flag, to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="p-2 flex items-center space-x-2 text-white text-left text-sm"
    >
      <img
        src={flag}
        alt="country-flag"
        className="flex flex-shrink-0 w-5 h-5 rounded-full border border-white object-cover"
      />
      <span>{text}</span>
    </Link>
  );
};

const LanguageSwitchers = ({ changeLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((val) => !val);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between max-lg:border max-lg:h-11 max-lg:px-4 max-lg:mt-8 space-x-1.5 py-1 relative max-lg:w-full"
      >
        <span className="flex space-x-2 items-center">
          <span className="font-medium cursor-pointer text-sm font-sohaMed hover:underline">Language</span>
          <BsChevronDown className="hidden lg:block font-medium cursor-pointer text-sm font-sohaMed hover:underline mt-1" />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="lg:absolute top-full right-0  px-4 py-4 lg:w-[156px] h-[120px] overflow-y-auto bg-text-2 border bg-[#000] rounded-lg border-white/20">
          {languages.map((item, i) => (
            <DropdownItem
              key={i}
              text={item.name}
              to={item.to}
              onClick={() => {
                changeLanguage(item.to === "/en" ? "en" : "fr");
                closeDropdown(); // Close the dropdown after selecting an option
              }}
              flag={item.flag}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitchers;
