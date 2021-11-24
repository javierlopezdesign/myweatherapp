import React, {useState,useEffect} from "react";
import "./style/style.sass";

function App() {


  // states
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  // const [temp, setTemp] = useState(0);
  // const [icon, setIcon] = useState("cloudy");
  const [cityInput, setcityInput] = useState("");
  // const [city,setCity] = useState("Falkirk");
  // const [country,setCountry] = useState("Scotland");
  // const [datetime,setDatetime] = useState("10/10/21 14:51");
  const [weatherInfo,setWeatherInfo] = useState({
    temp: undefined,
    feels_like: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    icon: undefined,
    detail: undefined,
    description: undefined
  });
  
  // each time browser rerender will get lat and lon again.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
// console.log(weatherInfo);
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", lon)
  }, [lat, lon]);


  const cityInputHandler = (e) => {
    // console.log(e.target.value);
    setcityInput(e.target.value)
  }

  const getWeather = async () => {
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=Denny,UK&appid=54d617b95444482297980a914d839284&units=metric")
    .then(res => res.json())
    .then(result => {

      setWeatherInfo({
        temp: result.main.temp,
        feels_like: result.main.feels_like,
        temp_min: result.main.temp_min,
        temp_max: result.main.temp_max,
        city: result.name,
        country:result.sys.country,
        sunrise:result.sys.sunrise,
        sunset:result.sys.sunset,
        icon: result.weather[0].icon,
        detail:result.weather[0].main,
        description: result.weather[0].description

      })
    })
  }

  return (
    <div className="App" onLoad={getWeather}>
      <h1>My weather App</h1>
      <div className="mainContainer">
        <div className="searchBar">
          <input type="text" onChange={cityInputHandler} value={cityInput}/>
          <button onClick={getWeather}>Search</button>
        </div>
        <div className="weatherBox">
          <h2>city: {weatherInfo.city}, {weatherInfo.country} </h2>
          <h3>Date and Time</h3>
          <div className="weatherInfo">
            <div className="weatherIcon">Icon: {weatherInfo.icon}</div>
            <div className="weatherDetail">Detail: {weatherInfo.detail}</div>
            <div className="weatherDescription">Description: {weatherInfo.description}</div>

            <div className="weatherTemp">Temp: {weatherInfo.temp}</div>
            <div className="weatherFeel">Temp_like: {weatherInfo.feels_like}</div>
            <div className="weatherTemp">Temp Min: {weatherInfo.temp_min}</div>
            <div className="weatherTemp">Temp Max: {weatherInfo.temp_max}</div>
            <div className="weatherSunrise">Temp Sunrise: {weatherInfo.sunrise}</div>
            <div className="weatherSunset">Temp Sunset: {weatherInfo.sunset}</div>
          
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
