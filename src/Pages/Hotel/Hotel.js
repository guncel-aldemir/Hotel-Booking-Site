import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import { ShowContext } from "../../Components/Context/ShowContext";

import LocationIcon from "../../Assets/Icons/LocationIcon/location-dot-solid.svg";
import Exit from "../../Assets/Icons/CircleIcon/circle-xmark-solid.svg";
import Left from "../../Assets/Icons/LeftIcon/arrow-left-solid.svg";
import Right from "../../Assets/Icons/RightIcon/arrow-right-solid.svg";

import "./Hotel.css";
import Reserve from "../../Components/Reserve/Reserve";


const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const { datas, date, options, open, setOpen, openModal, setOpenModal} =
    useContext(ShowContext);

  

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());

    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(date[0].endDate, date[0].startDate);
  const handleClick = () =>{
    setOpenModal(true)
  }
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <img
              src={Exit}
              alt=""
              className="close"
              onClick={() => setOpen(false)}
            ></img>
            <img
              src={Left}
              alt=""
              className="arrow"
              onClick={() => handleMove("l")}
            ></img>
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="sliderImg"
              ></img>
            </div>
            <img
              src={Right}
              alt=""
              className="arrow"
              onClick={() => handleMove("r")}
            ></img>
          </div>
        )}
        {datas
          .filter((item) => item._id === id)
          .map((item) => (
            <div className="hotelWrapper">
              <h1 className="hotelTitle">{item.name}</h1>
              <div className="hotelAddress">
                <div className="hotelLocation">
                <img src={LocationIcon} alt=""></img>
                <span>{item.address}</span>
                </div>
                
                <span className="hotelDistance">
                  Excellent location {item.distance}
                </span>
                <span className="hotelPriceHighlight">
                  Book a stay over $114 at this property and get a free airport
                  taxi
                </span>
                <div className="hotelImages">
                  {photos.map((photo, i) => (
                    <div className="hotelImgWrapper">
                      <img
                        onClick={() => handleOpen(i)}
                        alt=""
                        className="hotelImg"
                        src={photo.src}
                      ></img>
                    </div>
                  ))}
                </div>
                <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">
                      Stay in the heart of {item.city}
                    </h1>
                    <p className="hotelDesc">{item.desc}</p>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Perfect for a {days} -night stay!</h1>
                    <span>
                      Located in the real heart of {item.city}, this property
                      has an excellent location score of 9.8!
                    </span>
                    <h2>
                      <b>{days * item.cheapestPrice * options.room}₺</b> ({days}{" "}
                      nights)
                    </h2>
                    <button onClick={handleClick}>Reserve or Book Now!</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        
        <Footer />
        
      </div>
      {openModal && <Reserve setOpenModal={setOpenModal}  />}
    </div>
  );
};

export default Hotel;
