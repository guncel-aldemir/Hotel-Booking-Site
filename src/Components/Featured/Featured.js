import React, { useContext, useState } from "react";
import Antalya from "../../Assets/Images/antalya1.jpg";
import İzmir from "../../Assets/Images/izmir1.jpg";
import Muğla from "../../Assets/Images/mugla1.jpg";
import Aydın from "../../Assets/Images/kusadasi1.jpg";
import "./Featured.css";
import { ShowContext } from "../Context/ShowContext";

const Featured = () => {
  const { datas} = useContext(ShowContext);
  const cityNumber = [];
  const cities = datas.reduce((data, item) => {
    data[item.city] = [];
    return data;
  }, {});
  Object.keys(cities).forEach((city) => {
    let findCity = datas.filter((item) => item.city === city);

    cityNumber.push(findCity);
    return findCity;
  });
  const [title, setTitle] = useState(cityNumber);
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" alt="" src={Antalya}></img>
        <div className="featuredTitles">
          <h1>Antalya</h1>
          <h2>{title[0].length} properties </h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" alt="" src={Muğla}></img>
        <div className="featuredTitles">
          <h1>Muğla</h1>
          <h2>{title[1].length} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" alt="" src={İzmir}></img>
        <div className="featuredTitles">
          <h1>İzmir</h1>
          <h2>{title[2].length} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" alt="" src={Aydın}></img>
        <div className="featuredTitles">
          <h1>Aydın</h1>
          <h2>{title[3].length} properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
