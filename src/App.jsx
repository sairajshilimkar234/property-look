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
import ScrollToTop from "./components/shared components/ScrollToTop";
import Residential from "./pages/Projects/Residential";
import Commercial from "./pages/Projects/Commercial";
import East from "./pages/projectsByRegion/East";
import South from "./pages/projectsByRegion/South";
import West from "./pages/projectsByRegion/West";
import SiteUnderMaintain from "./components/shared components/SiteUnderMaintain";


function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <ContactModal/>
      <Navbar/>
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/contact" element={< ContactUs />}/>
          <Route path="/benefits/consultation" element={< FreeConsulting />}/>
          <Route path="/benefits/homeloan" element={< HomeLoan />}/>
          <Route path="/projects/residential" element={< Residential />}/>
          <Route path="/projects/commercial" element={< Commercial />}/>
          <Route path="/properties/Pune East" element={< East />}/>
          <Route path="/properties/Pune West" element={< West/>}/>
          <Route path="/properties/Pune South" element={< South />}/>
          <Route path="/maintainance" element={< SiteUnderMaintain />}/>
        </Routes>
      <Footer/>
      <BottomActions/>
    </BrowserRouter>
    </>
  )
}

export default App
