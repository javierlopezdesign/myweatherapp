import React, {useState} from "react";
import "./style/style.sass";

function App() {
// 
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("cloudy");
  const [cityInput, setcityInput] = useState("");
  const [city,setCity] = useState("Falkirk");
  const [country,setCountry] = useState("Scotland");
  const [datetime,setDatetime] = useState("10/10/21 14:51");

  const cityInputHandler = (e) => {
    // console.log(e.target.value);
    setcityInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>My weather App</h1>
      <div className="mainContainer">
        <div className="searchBar">
          <input type="text" onChange={cityInputHandler} value={cityInput}/>
          <button>Search</button>
        </div>
        <div className="weatherBox">
          <h2>{city}, {country}</h2>
          <h3>{datetime}</h3>
          <div className="weatherInfo">
            <div className="weatherIcon">{icon}</div>
            <div className="weatherTemp">{temp}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
