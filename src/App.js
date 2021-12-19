import React, { useState, useEffect } from "react";
import "./style/style.sass";
import "./style/loader.css";
// import "./style/currentweather.sass";

// import { Icon } from '@iconify/react';
import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";
import CurrentStats from "./components/CurrentStats";
import CurrentLocation from "./components/CurrentLocation";
import Footer from "./components/footer";
import ForecastWeather from "./components/ForecastWeather";

function App() {
    
    // States

    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentLocation, setCurrentLocation] = useState({});
    
    const [currentWeatherInfo,setCurrentWeatherInfo] = useState({});
      const [forecastInfo,setForecastInfo] = useState({
        temp_min: undefined,
        temp_max: undefined,
        sunrise: undefined,
        sunset: undefined,
        icon: undefined,
        detail: undefined,
    });
    
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    const pauseFunction = async () => {
        await delay(1000);
        setIsLoading(false);
        // console.log(currentWeatherInfo)
      };

    const getCurrentWeather = async (lat,lon) => {
        try{
            if(lon.length !== 0){
                await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=54d617b95444482297980a914d839284&units=metric`)
                .then(res2 => res2.json())
                .then(result2 => {
                    setCurrentLocation({
                        city: result2.name,
                        country: result2.sys.country
                        
                    })
                });

                await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=54d617b95444482297980a914d839284&units=metric`)
                    .then(res => res.json())
                    .then(result => {
                        // let icon = "noto:sun";
                        // console.log(result)
                        pauseFunction();
                        setCurrentWeatherInfo({
                            temp: round(result.current.temp,1),
                            feels_like: round(result.current.feels_like,1),
                            temp_min: round(result.daily[0].temp.min,1),
                            temp_max: round(result.daily[0].temp.max,1),
                            // city: result.name,
                            // country: result.sys.country,
                            sunrise: formatTime(result.current.sunrise),
                            sunset: formatTime(result.current.sunset),
                            humidity:result.current.humidity,
                            wind: round(result.current.wind_speed,1),
                            icon: `http://openweathermap.org/img/wn/${result.current.weather[0].icon}.png`,
                            detail:result.current.weather[0].main,
                            // description: result.weather[0].description,
                            time_requested: formatTime(result.current.dt),
                            day1: {
                            //     // result.daily[1].temp.day
                                temp: round(result.daily[1].temp.day,1),
                                icon: `http://openweathermap.org/img/wn/${result.daily[1].weather[0].icon}.png`
                            },
                            day2: {
                                temp: round(result.daily[2].temp.day,1),
                                icon: `http://openweathermap.org/img/wn/${result.daily[2].weather[0].icon}.png`
                            },
                            day3: {
                                temp: round(result.daily[3].temp.day,1),
                                icon: `http://openweathermap.org/img/wn/${result.daily[3].weather[0].icon}.png`
                            },
                            day4: {
                                temp: round(result.daily[4].temp.day,1),
                                icon: `http://openweathermap.org/img/wn/${result.daily[4].weather[0].icon}.png`
                            },
                            day5: {
                                temp: round(result.daily[4].temp.day,1),
                                icon: `http://openweathermap.org/img/wn/${result.daily[5].weather[0].icon}.png`
                            }


                        })

            },)
        }
        }catch (error) {
            console.log(error);
        }
    }

    const formatTime = (timestamp) => {
        return new moment(timestamp*1000).format('HH:mm')
    }
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

  // each time browser rerender will get lat and lon again.
    useEffect(() => {
        setIsLoading(true)
        // console.log("app init > loading? > " + isLoading)
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        //   getCurrentWeather(position.coords.latitude,position.coords.longitude);
        })    
    },[]);

    useEffect(()=>{
        getCurrentWeather(lat,lon);
    },[lat,lon])

    useEffect(()=>{
        // console.log("Loading? > " + isLoading);
        // console.log(currentWeatherInfo);
    },[isLoading])

    return(
        <>
            <div className="App">
                
                { isLoading && 
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                }
                { !isLoading && 
                    <div className="weather_container">
                        <CurrentLocation
                            currentLocation={currentLocation}
                            currentWeatherInfo={currentWeatherInfo}
                            lat={lat}
                            lon={lon}
                            isLoading={isLoading}
                        />
                        <CurrentWeather 
                            currentWeatherInfo={currentWeatherInfo}
                            lat={lat}
                            lon={lon}
                            isLoading={isLoading}
                        />
                        <CurrentStats 
                            currentWeatherInfo={currentWeatherInfo}
                            lat={lat}
                            lon={lon}
                            isLoading={isLoading}
                        />
                        <ForecastWeather 
                            currentWeatherInfo={currentWeatherInfo}
                            lat={lat}
                            lon={lon}
                            isLoading={isLoading}
                        />
                    </div>
                }
                    
                    
            </div>
            <Footer />
        </>
    );
}
export default App;