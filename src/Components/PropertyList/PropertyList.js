import React, { useState } from "react";

import Hotel from "../../Assets/Images/hotel.jpg";
import Apartment from "../../Assets/Images/Apartment.jpg";
import Resorts from "../../Assets/Images/Resort.jpg";
import Villas from "../../Assets/Images/Villa.jpg";
import { useContext } from "react";
import { ShowContext } from "../Context/ShowContext";
import "./PropertyList.css";

const PropertyList = () => {
  const { datas} = useContext(ShowContext);
  const propertyType= [];
  const properties = datas.reduce((data, item) => {
    data[item.star] = [];
    return data;
  }, {});
  Object.keys(properties).forEach(property=>{
    let findProperty=datas.filter(item=>item.star === property).filter(item=>item.star)
    
    propertyType.push(findProperty)
    
    return findProperty;
  })
  
  
  const [type,setType]=useState(propertyType)
  
  return (
    <div className="pList">
      <div className="pListItem">
        <img className="pListImg" alt="" src={Hotel}></img>
        
        <div className="pListTitles">
          <h1> Ultra All Inclusive Hotel </h1>
          <h2>{type[0].length} Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img className="pListImg" alt="" src={Apartment}></img>

        <div className="pListTitles">
          <h1>All Inclusive Hotel</h1>
          <h2>{type[1].length} Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img className="pListImg" alt="" src={Resorts}></img>

        <div className="pListTitles">
          <h1>Adults Only</h1>
          <h2>{type[2].length} Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img className="pListImg" alt="" src={Villas}></img>

        <div className="pListTitles">
          <h1>Breakfast Inclusive Hotel</h1>
          <h2>{type[3].length} Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
