import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";
import { PricingProvider } from "./contexts/PricingContext";

function App() {
  return (
    <HelmetProvider>
      <PricingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <FloatingContact />
          </div>
        </Router>
      </PricingProvider>
    </HelmetProvider>
  );
}

export default App;
