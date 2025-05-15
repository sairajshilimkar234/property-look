import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared components/Navbar";
import Footer from "./components/shared components/Footer";
import Home from "./pages/Home";
import ContactModal from "./components/shared components/ContactModal";
import BottomActions from "./components/shared components/BottomAction";
import ContactUs from "./pages/ContactUs";
import FreeConsulting from "./pages/Benefits/FreeConsulting";
import HomeLoan from "./pages/Benefits/HomeLoan";


function App() {
  return (
    <>
    <BrowserRouter>
    <ContactModal/>
      <Navbar/>
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/contact" element={< ContactUs />}/>
          <Route path="/benefits/consultation" element={< FreeConsulting />}/>
          <Route path="/benefits/homeloan" element={< HomeLoan />}/>
        </Routes>
      <Footer/>
      <BottomActions/>
    </BrowserRouter>
    </>
  )
}

export default App
