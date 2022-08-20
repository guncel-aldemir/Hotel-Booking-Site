import React from "react";
import Featured from "../../Components/Featured/Featured";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Footer from "../../Components/Footer/Footer"

import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedProperties/>
        <Footer/>
        
      </div>
    </div>
  );
};

export default Home;
