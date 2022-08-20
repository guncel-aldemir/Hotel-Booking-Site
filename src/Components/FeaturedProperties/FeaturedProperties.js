import React from "react";
import { useContext } from "react";
import { ShowContext } from "../Context/ShowContext";
import Room from "../../Assets/Images/Room.jpg";
import "./FeaturedProperties.css";
const FeaturedProperties = () => {
  const { datas } = useContext(ShowContext);
  
 
  return (
    <div className="fp">
      {datas
        .filter((item) => item.cheapestPrice > 5000)
        .slice(0, 5)
        .map((item) => (
          <div className="fpItem" key={item._id}>
            <img className="fpImg" alt="" src={Room}></img>

            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from {item.cheapestPrice}</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        ))}
      
    </div>
  );
};

export default FeaturedProperties;
