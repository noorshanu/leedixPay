import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useTranslation, initReactI18next } from "react-i18next";
import i18next from "i18next";
import enTranslation from "./en.json";
import frTranslation from "./fr.json";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
// import ScrollToTop from "./components/ScrollToTop  ";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function App() {
  // const { i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <>
      <Router>
       {/* <ScrollToTop/> */}

        <div className="">
          <Switch>
            {/* English Routes */}
            <Route path="/en" exact>
              <Home />
            </Route>
            <Route path="/en/about-us" exact>
              <AboutUs />
            </Route>

            {/* French Routes */}
            <Route path="/fr" exact>
              <Home />
            </Route>
            <Route path="/fr/about-us" exact>
              <AboutUs />
            </Route>

            {/* Default Route */}
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;