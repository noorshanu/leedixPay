import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop ";

import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <div className="mb-24">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
