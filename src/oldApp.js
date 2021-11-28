import React, {useState,useEffect} from "react";
import "./style/style.sass";
import { Icon } from '@iconify/react';
import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";

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
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

    });
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", lon)
    
    // if(lat && lon) {
    //   // getCurrentWeather();
    // }

  }, [lat, lon]);


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
          icon: result.weather[0].icon,
          detail:result.weather[0].main,
          description: result.weather[0].description
        })
        
        // console.log(result);
        setIcon("http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png")
        
      },)
    }catch (error) {
      console.log(error);
    }
    
  }

  const formatTime = (timestamp) => {
    return new moment(timestamp*1000).format('HH:mm')
  }

  const getForecastWeather = async () => {
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
      }
      )
      console.log(forecastInfo)
      
        
        // {
        //   temp_min: result.daily[1].temp.min,
        //   temp_max: result.daily[1].temp.max,
        //   sunrise: formatTime(result.daily[1].sunrise),
        //   sunset: formatTime(result.daily[1].sunset),
        //   icon: result.daily[1].weather[0].icon,
        //   detail: result.daily[1].weather[0].main,
        // },
        // {
        //  temp_min: result.daily[2].temp.min,
        //   temp_max: result.daily[2].temp.max,
        //   sunrise: formatTime(result.daily[2].sunrise),
        //   sunset: formatTime(result.daily[2].sunset),
        //   icon: result.daily[2].weather[0].icon,
        //   detail: result.daily[2].weather[0].main,
        // },
        // {
        //   temp_min: result.daily[3].temp.min,
        //   temp_max: result.daily[3].temp.max,
        //   sunrise: formatTime(result.daily[3].sunrise),
        //   sunset: formatTime(result.daily[3].sunset),
        //   icon: result.daily[3].weather[0].icon,
        //   detail: result.daily[3].weather[0].main,
        // }

      // setIcon("http://openweathermap.org/img/wn/" + forecastInfo.icon + "@2x.png");
      // console.log(forecastInfo)
      console.log(result)

      // console.log(`http://openweathermap.org/img/wn/${result.daily[3].weather[0].icon}@2x.png`)

  })
  // )
}
const ForecastDay = () => {
  // let fore = forecastInfo.map(item => (
  //   <h1>{item.icon}</h1>
  // ))
  console.log(forecastInfo)
  return(
    <p>hello</p>
  )
}



  return (
    <div className="App">
      <h1>My weather App</h1>
      <div className="mainContainer">
        <div className="searchBar">
          {/* <input type="text" onChange={cityInputHandler} value={cityInput}/> */}
        </div>


        {/* <div className="weatherBox">
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
            <div className="weatherDescription">Description: {weatherInfo.description}</div>

            <div className="weatherTemp">Temp: {weatherInfo.temp}</div>
            <div className="weatherFeel">Temp_like: {weatherInfo.feels_like}</div>
            <div className="weatherTemp">Temp Min: {weatherInfo.temp_min}</div>
            <div className="weatherTemp">Temp Max: {weatherInfo.temp_max}</div>
            <div className="weatherSunrise">Temp Sunrise: {weatherInfo.sunrise}</div>
            <div className="weatherSunset">Temp Sunset: {weatherInfo.sunset}</div>
          
          </div> */}
          <CurrentWeather 
            getForecastWeather = {getForecastWeather()}
            getCurrentWeather  = {getCurrentWeather()}
            weatherInfo = {weatherInfo}
            icon = {icon}

          />
{/* ADD A MAP FUNCTION WITH A  */}
          <div className="weatherInfoForecast">
            <h3>Forecast</h3>
             {forecastInfo.icon === undefined ? "" :<ForecastDay />}
             {}
          </div>
        </div>
      </div>

    // </div>
  );
}

export default App;
