import { React, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";
import Tower from "../../Assets/Images/Tower.jpg";

import dog from "../../Assets/Images/dog sad face.jfif"
import { ShowContext } from "../Context/ShowContext";
const SearchItem = () => {
  const { datas, destination, destinationError, setDestinationError } =
    useContext(ShowContext);

  const handleDestinationError = () => {
    datas.filter(
      (item) => item.city !== destination && setDestinationError(true)
    );
  };
  useEffect(() => {
    handleDestinationError();
  }, []);
  return (
    <>
      {datas
        .filter((item) => item.city === destination)
        .map((item) => (
          <div className="searchItem">
            <div className="Image">
              <img src={Tower} className="siImg" alt=""></img>
            </div>
            <div className="Information">
              <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance}</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubtitle">
                  Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                  You can cancel later, so lock in this great price today!
                </span>
              </div>
              <div className="siDetails">
                <div className="siRating">
                  <span>Excellent</span>
                  <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                  <span className="siPrice">{item.cheapestPrice}₺</span>
                  <span className="siTaxOp">Includes taxes and Fees</span>
                  <Link to={`/hotels/${item._id}`}>See availability</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      {destinationError &&  <h1 className="errorClass"  > <img className="errorDog" src={dog} alt="" ></img>Uppsss!!!!  unfortunately, we can not find data in the criteria you are looking for, please, Could you turn back the homepage and search between Antalya,İzmir,Aydın and Muğla.</h1>
   }
    </>
  );
};

export default SearchItem;
