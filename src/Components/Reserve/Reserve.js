import { useContext, React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Exit from "../../Assets/Icons/CircleIcon/circle-xmark-solid.svg";

import { ShowContext } from "../Context/ShowContext";

import "./Reserve.css";

const Reserve = ({ setOpenModal }) => {
  const {
    datas,

    date,

    options,

    name,
    setName,
    number,
    setNumber,

    setCardNum,
    cardNum,
    disabled,
    setDisabled,
    room,
    setRoom,
  } = useContext(ShowContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());

    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(date[0].endDate, date[0].startDate);

  const handleErrorMessageName = (value) => {
    if (value.length < 3 && value !== "") {
      return (
        <p style={{ color: "red" }}>your name must have at least 3 letters.</p>
      );
    }
  };
  const handleErrorMessageNumber = (value) => {
    if (value.toString().length < 11 && value !== "") {
      return (
        <p style={{ color: "red" }}>please enter your 11 digit phone number </p>
      );
    }
  };
  const handleErrorMessageCardNum = (value) => {
    if (value.toString().length < 16 && value !== "") {
      return (
        <p style={{ color: "red" }}>please enter your 16 digit card number </p>
      );
    }
  };

  const handleSubmit = () => {
    setOpenModal(false);
    alert(
      "your booking information has been sent to the phone you have provided. Thank you for choosing us and we wish you a good day.   Mare Nostrum"
    );
  };
  const handleDisabled = () => {
    if (
      name.length > 2 &&
      number.toString().length === 11 &&
      cardNum.toString().length === 16 &&
      room
    ) {
      setDisabled(false);
    }
  };
  useEffect(() => {
    handleDisabled();
  }, [name, number, cardNum, room]);

  return (
    <div className="reserve">
      <div className="rContainer">
        <img
          src={Exit}
          alt=""
          className="close"
          onClick={() => setOpenModal(false)}
        ></img>
        <div className="rform">
          <form className="form">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Your FullName"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            {handleErrorMessageName(name)}

            <label>Phone Number:</label>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              maxLength={11}
              name="number"
              id="number"
              onChange={(e) =>
                setNumber(parseInt(e.target.value.replace(/\D/g, "")))
              }
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
            />
            {handleErrorMessageNumber(number)}

            <label>Credit Card :</label>
            <input
              type="number"
              maxLength={16}
              placeholder="Enter Your Credit Card"
              id="cardNum"
              onChange={(e) =>
                setCardNum(parseInt(e.target.value.replace(/\D/g, "")))
              }
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
            />
            {handleErrorMessageCardNum(cardNum)}
          </form>
        </div>
        {datas
          .filter((item) => item._id === id)
          .map((item) => (
            <div className="rItem">
              <div className="rItemInfo">
                <div className="rTitle">
                  {item.rooms.map((item) => item.roomTitle)}
                </div>
                <div className="rDesc">
                  {item.rooms.map((item) => item.desc)}
                </div>
                <div className="rMax">
                  Max People:{item.rooms.map((item) => item.maxPeople)}
                </div>
                <div className="rPrice">
                  {days * item.cheapestPrice * options.room}
                </div>
              </div>

              <div className="rSelectRooms">
                <div className="room">
                  <span>Select Your Rooms:</span>
                  <div className="number1">
                    <label>301</label>
                    <input
                      type="checkbox"
                      value={room}
                      defaultChecked={room}
                      onChange={() => setRoom(!room)}
                    ></input>
                  </div>
                  <div className="number2">
                    <label>302</label>
                    <input
                      type="checkbox"
                      value={room}
                      defaultChecked={room}
                      onChange={() => setRoom(!room)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <button
          disabled={disabled}
          className={disabled ? "btnDisabled btn" : "btn rButton"}
          onClick={handleSubmit}
        >
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
