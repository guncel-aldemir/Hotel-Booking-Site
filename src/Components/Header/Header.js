import React, { useContext } from "react";
import { DateRange } from "react-date-range";

import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Bed from "../../Assets/Icons/BedIcon/bed-solid.svg";

import Calendar from "../../Assets/Icons/CalendarIcon/calendar-days-solid.svg";
import Person from "../../Assets/Icons/PersonIcon/user-solid.svg";
import BedSearch from "../../Assets/Icons/BedIcon/bed-solid search.svg";

import "./Header.css";
import { Link } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";
const Header = ({ type }) => {
  const {
    setDestination,
    openDate,
    setOpenDate,
    date,
    setDate,
    openOptions,
    setOpenOptions,
    options,
    setOptions,
  } = useContext(ShowContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItems active">
            <img src={Bed} alt=""></img>
            <span>Stays</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Welcome to Mare Nostrum </h1>
            <p className="headerDesc">
              Find your next stay between Antalya, Muğla, İzmir and Aydın.
            </p>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <img src={BedSearch} alt=""></img>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput input"
                  onChange={(e) =>
                    setDestination(
                      e.target.value.charAt(0).toLocaleUpperCase() +
                        e.target.value.slice(1).toLocaleLowerCase()
                    )
                  }
                ></input>
              </div>

              <div className="headerSearchItem">
                <img src={Calendar} alt=""></img>
                <span
                  className="headerSearchInput"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <img src={Person} alt=""></img>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchInput"
                >
                  {`${options.adult} adult ${options.children} children  ${options.room} room`}{" "}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <Link to="/hotels">Search</Link>
                {}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
