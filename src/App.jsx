import { BrowserRouter as Router, Route, Routes,  Navigate, } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop ";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import NestedRoutes from "./components/NestedRoutes";



function App() {
  return (
    <>
     <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop />

        <div className="">
          <Routes>
          <Route path="/" element={<Navigate to="/en" />} />
                <Route path="/:locale/*" element={<NestedRoutes />} />
         
          </Routes>
        </div>
      </Router>
      </I18nextProvider>
    </>
  );
}

export default App;
