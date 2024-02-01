import Home from "../Pages/Home";

import i18next from "i18next";
import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";

const changeLanguage = (lng) => {
  i18next.changeLanguage(lng);
};

function NestedRoutes() {
  const params = useParams();
  const lang = i18next.language;

  useEffect(() => {
    if (lang != params.locale) {
      changeLanguage(params.locale);
    }
  }, [lang, params.locale]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default NestedRoutes;
