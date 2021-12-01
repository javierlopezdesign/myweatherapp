import React, { useState, useEffect } from "react";
import "./style/style.sass";
// import { Icon } from '@iconify/react';
import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/footer";

function App() {
    
    // States
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [currentWeatherInfo,setCurrentWeatherInfo] = useState({
        temp: undefined,
        feels_like: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        wind: undefined,
        humidity: undefined,
        icon: undefined,
        detail: undefined,
        description: undefined
      });

    const getCurrentWeather = async () => {
        try{
          // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=54d617b95444482297980a914d839284&units=metric`)
    
          await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Denny,uk&appid=54d617b95444482297980a914d839284&units=metric`)
          .then(res => res.json())
          .then(result => {
            setCurrentWeatherInfo({
              temp: result.main.temp,
              feels_like: result.main.feels_like,
              temp_min: result.main.temp_min,
              temp_max: result.main.temp_max,
              city: result.name,
              country: result.sys.country,
              sunrise: formatTime(result.sys.sunrise),
              sunset: formatTime(result.sys.sunset),
              humidity:result.main.humidity,
              wind: result.wind.speed,
              icon: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
              detail:result.weather[0].main,
              description: result.weather[0].description
            })
            // console.log(result);
            
            setLat(result.coord.lat)
            setLon(result.coord.lon)
    
          },)
        }catch (error) {
          console.log(error);
        }
    }

    const formatTime = (timestamp) => {
        return new moment(timestamp*1000).format('HH:mm')
    }

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
    return(
        <div className="App">
            <CurrentWeather 
                currentWeatherInfo={currentWeatherInfo}
                
            />

            <Footer />




        </div>

    );
}
export default App;