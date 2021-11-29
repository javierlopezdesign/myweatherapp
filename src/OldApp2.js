import React, {useState,useEffect} from "react";
import "./style/style.sass";
// import { Icon } from '@iconify/react';
import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
function App() {

  // states
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  // const [icon, setIcon] = useState("");
  const [cityInput, setcityInput] = useState("");
  
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

  const [forecastInfo,setForecastInfo] = useState([
    {
      temp: undefined,
      feels_like: undefined,
      temp_min: undefined,
      temp_max: undefined,
      sunrise: undefined,
      sunset: undefined,
      icon: undefined,
      detail: undefined,
    }

  ]);


  // each time browser rerender will get lat and lon again.
  useEffect(() => {
  //   return new Promise((req, rej) => {
  //     navigator.geolocation.getCurrentPosition((position) => {
          // console.log(position);
          // setLat(position.coords.latitude);
          // setLon(position.coords.longitude);
  //     })
      getCurrentWeather();
  },[]);

  useEffect(() =>{
    // console.log("forecast fetched")
    // console.log(lat)
    // console.log(lon)

    getForecastWeather();
  },[lon])

  const cityInputHandler = (e) => {
    // console.log(e.target.value);
    setcityInput(e.target.value)
  }

  const getCurrentWeather = async () => {
    try{
      // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=54d617b95444482297980a914d839284&units=metric`)

      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Denny,uk&appid=54d617b95444482297980a914d839284&units=metric`)
      .then(res => res.json())
      .then(result => {
        setWeatherInfo({
          temp: result.main.temp,
          feels_like: result.main.feels_like,
          temp_min: result.main.temp_min,
          temp_max: result.main.temp_max,
          city: result.name,
          country: result.sys.country,
          sunrise: formatTime(result.sys.sunrise),
          sunset: formatTime(result.sys.sunset),
          icon: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
          detail:result.weather[0].main,
          description: result.weather[0].description
        })
        
        setLat(result.coord.lat)
        setLon(result.coord.lon)

        // console.log(result);
      },)
    }catch (error) {
      console.log(error);
    }
  }

  const formatTime = (timestamp) => {
    return new moment(timestamp*1000).format('HH:mm')
  }

  const getForecastWeather = async () => {
    
    // console.log(lat.length)
    // lat.length === 0 ? console.log("lat not set") : console.log("lat> " + lat)

    // console.log(lon)
    if( lat.length !== 0 && lon.length !== 0){

      await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=alerts&appid=54d617b95444482297980a914d839284&units=metric")
      .then(res => res.json())
      .then(result => {
        setForecastInfo({
          temp_min: result.daily[0].temp.min,
          temp_max: result.daily[0].temp.max,
          sunrise: formatTime(result.daily[0].sunrise),
          sunset: formatTime(result.daily[0].sunset),
          icon: result.daily[0].weather[0].icon,
          detail: result.daily[0].weather[0].main,
        })
      })
      // console.log(forecastInfo)
    } 
}


  return (
    <div className="App">
      <h1>My weather App</h1>
      <div className="mainContainer">
        <div className="searchBar">
          <input type="text" onChange={cityInputHandler} value={cityInput}/>
        </div>
        
        <div className="weatherBox">
          <CurrentWeather 
            weatherInfo={weatherInfo}
          />
        </div>
        <div className="forecastBox">
          <ForecastWeather forecastInfo={forecastInfo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
