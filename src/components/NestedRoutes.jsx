import Cookies from "Pages/Cookies";
import Home from "Pages/Home";
import PrivacyPolicy from "Pages/PrivacyPolicy";
import Stake from "Pages/Stake";
import Terms from "Pages/Terms";
import i18next from "i18next";
import { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

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
        <Route path="/dashboard" element={<Stake />} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/privacy&policy" element={<PrivacyPolicy/>} />
        <Route path="/terms&condition" element={<Terms/>} />
      </Routes>
    </div>
  );
}

export default NestedRoutes;
