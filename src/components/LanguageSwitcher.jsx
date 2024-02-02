import React from 'react';
import { Link } from 'react-router-dom';

const LanguageSwitcher = ({ changeLanguage }) => {
  return (
    <div className="relative">
      <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        Language
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M14.293 6.707a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L10 12.586l4.293-4.293z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <Link to="/en" onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">English</Link>
          <Link to="/fr" onClick={() => changeLanguage('fr')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">French</Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;