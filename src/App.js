import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Hotel from "./Pages/Hotel/Hotel";
import DATAS from "./denemeJS.json";
import { useState,useEffect } from "react";
import { ShowContext } from "./Components/Context/ShowContext";


function App() {
  const [datas, setDatas] = useState(DATAS);
  const [destination,setDestination]=useState(JSON.parse(localStorage.getItem("destination")) ?? null);
  const [openDate, setOpenDate] = useState(false);
  const [open, setOpen] = useState();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [cardNum, setCardNum] = useState("");
  const[disabled, setDisabled]= useState(true)
  const [destinationError, setDestinationError] = useState(false)
  const[room,setRoom] = useState(false)
  const [date, setDate] = useState( [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      
    },
  ]  
    
  );
  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState(JSON.parse(localStorage.getItem("options")) ?? {
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openModal, setOpenModal] = useState(false);
  const contextData = { datas, setDatas, destination,setDestination,openDate, setOpenDate,date, setDate,openOptions, setOpenOptions,options, setOptions, open ,setOpen , openModal, setOpenModal,name, setName,number, setNumber,cardNum, setCardNum,disabled, setDisabled,destinationError, setDestinationError,room,setRoom };
  useEffect(() => {
    localStorage.setItem('destination', JSON.stringify(destination));
  }, [destination]);
  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  return (
    <ShowContext.Provider value={contextData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          
        </Routes>
      </BrowserRouter>
    </ShowContext.Provider>
  );
}

export default App;
