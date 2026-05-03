import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Skincare from "./pages/Skincare";
import About from "./pages/About";
import ScanPage from "./pages/ScanPage";
import Login from "./pages/Login";
import Analysis from "./pages/Analysis";
import PricingPersonal from "./pages/PricingPersonal";
import PricingPremium from "./pages/PricingPremium";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/skincare" element={<Skincare />} />
            <Route path="/about" element={<About />} />
            <Route path="/scanpage" element={<ScanPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/personal" element={<PricingPersonal />} />
            <Route path="/premium" element={<PricingPremium />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
