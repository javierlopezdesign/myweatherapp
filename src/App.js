import React, {useState,useEffect} from "react";
import "./style/style.sass";
import { Icon } from '@iconify/react';
import moment from "moment";

function App() {


  // states
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [icon, setIcon] = useState("");
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
  
  // each time browser rerender will get lat and lon again.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

    });
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", lon)
    
    if(lat && lon) {
      // getCurrentWeather();
    }

  }, [lat, lon]);


  const cityInputHandler = (e) => {
    // console.log(e.target.value);
    setcityInput(e.target.value)
  }



  const getCurrentWeather = async () => {
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=Denny,UK&appid=54d617b95444482297980a914d839284&units=metric")
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
        icon: result.weather[0].icon,
        detail:result.weather[0].main,
        description: result.weather[0].description
      })
      
      // console.log(result);
      setIcon("http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png")
      
    },)
  }

  const formatTime = (timestamp) => {
    return new moment(timestamp*1000).format('HH:mm')
  }

  const getForecastWeather = async () => {
    // await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=alerts&appid=54d617b95444482297980a914d839284&units=metric")
    // .then(res => res.json())
    // .then(result => {
    //   setWeatherInfo({
    //     temp: result.current.temp,
    //     feels_like: result.current.feels_like,
    //     temp_min: result.daily[0].temp.min,
    //     temp_max: result.daily[0].temp.max,
    //   //   city: result.name, from another call
    //   //   country: result.sys.country,  from another call
    //     sunrise: formatTime(result.current.sunrise),
    //     sunset: formatTime(result.current.sunset),
    //     icon: result.current.weather[0].icon,
    //     detail:result.current.weather[0].main,
    //     description: result.current.weather[0].description
    //   }
    //   )
    //   setIcon("http://openweathermap.org/img/wn/" + weatherInfo.icon + "@2x.png");
    // }
    console.log("called forecast...")
  // )
}




  return (
    <div className="App">
      <h1>My weather App</h1>
      <div className="mainContainer">
        <div className="searchBar">
          <input type="text" onChange={cityInputHandler} value={cityInput}/>
        </div>
        <div className="weatherBox">
          <button className="refreshButton" onClick={() => {
                                getForecastWeather();
                                getCurrentWeather();
                              }
                              }>
            <Icon className="refreshIcon" icon="eva:refresh-outline" />
          </button>
          <h2>city: {weatherInfo.city}, {weatherInfo.country} </h2>
          <h3>Date and Time</h3>
          <div className="weatherInfoCurrent">
            <h3>Today...</h3>
            <img className="weatherIcon" src={icon} alt={weatherInfo.detail} />
            <div className="weatherDetail">Detail: {weatherInfo.detail}</div>
            {/* <div className="weatherDescription">Description: {weatherInfo.description}</div> */}

            <div className="weatherTemp">Temp: {weatherInfo.temp}</div>
            <div className="weatherFeel">Temp_like: {weatherInfo.feels_like}</div>
            <div className="weatherTemp">Temp Min: {weatherInfo.temp_min}</div>
            <div className="weatherTemp">Temp Max: {weatherInfo.temp_max}</div>
            <div className="weatherSunrise">Temp Sunrise: {weatherInfo.sunrise}</div>
            <div className="weatherSunset">Temp Sunset: {weatherInfo.sunset}</div>
          
          </div>
          <div className="weatherInfoForecast">
            <h3>Forecast</h3>
            <img className="weatherIcon" src={icon} alt={weatherInfo.detail} />
            <div className="weatherDetail">Detail: {weatherInfo.detail}</div>
            {/* <div className="weatherDescription">Description: {weatherInfo.description}</div> */}

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
