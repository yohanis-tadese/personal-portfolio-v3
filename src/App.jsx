import React, { useState, useEffect } from "react";
import "./App.scss";
import About from "./Components/about/About";
import Homepage from "./Components/homePage/Homepage";
import Navbar from "./Components/header/Navbar";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/service/Service";
import SideBar from "./Components/sideBar/SideBar";
import Resume from "./Components/resume/Resume";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Certeficate from "./Components/certeficate/Certeficate";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="app">
      <>
        <SideBar />
        <Navbar />
        <Homepage />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Certeficate />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
