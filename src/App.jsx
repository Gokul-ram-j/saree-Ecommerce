import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ImageCarousel from "./components/HeroSection/AdsCarousel";
import CategoryNavbar from "./components/CategoryNav/CategoryNavbar";
function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <CategoryNavbar/>
      
    </>
  );
}

export default App;
