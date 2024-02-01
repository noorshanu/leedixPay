import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop ";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
