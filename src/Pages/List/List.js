import React, { useContext } from "react";

import { format } from "date-fns";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

import "./List.css";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/SearchItem/SearchItem";
import { ShowContext } from "../../Components/Context/ShowContext";
import { Link } from "react-router-dom";
const List = () => {
  const { destination, options, date, setDate, openDate, setOpenDate } =
    useContext(ShowContext);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}></input>
            </div>
            <div className="lsItem">
              <label>Check-In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  ></input>
                </div>
              </div>
            </div>
            <Link to="/">Search</Link>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
