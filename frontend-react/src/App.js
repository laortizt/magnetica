import logo from "./img/logoMagnetica.png";
import './App.css';
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ZodiacStrip from "./components/ZodiacStrip";
import ZodiacModal from "./components/ZodiacModal";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Galery from "./components/Galery";
import Store from "./components/Store";
import Payment from "./components/Payment";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Background from "./components/Background";
import MysticSymbols from "./components/MysticSymbols";
import { useState } from "react";



function App() {
  const [selectedSign, setSelectedSign] = useState(null);
  return (
    <div className="App"> 
      <Cursor/>
      <Background/>
      <MysticSymbols/>
      <Navbar/>
      <Hero/>
      
       {/* click signos */}
      <ZodiacStrip setSelectedSign={setSelectedSign} />

      {/* modal signos */}
     <ZodiacModal
        selectedSign={selectedSign}
        onClose={() => setSelectedSign(null)}
      />

      <Services/>
      <Schedule/>
      <Galery/>
      <Store/>
      <Payment/>
      <Footer/>

      
    </div>
  );
}

export default App;