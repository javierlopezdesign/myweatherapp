import React, { useState, useEffect } from "react";
import "./style/style.sass";
import "./style/loader.css";

// import { Icon } from '@iconify/react';
import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/footer";

function App() {
    
    // States

    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
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
        description: undefined,
        time_requested: undefined

      });
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
        await delay(2000);
        
        console.log("Waited 2s");
        
        setIsLoading(false);
        console.log(currentWeatherInfo);

      };

    const getCurrentWeather = async (lat,lon) => {
        try{
            if(lon.length !== 0){
    
    // This is the One call, once I have the UI ready change the fetch API to get forecast.
                //       await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely&appid=54d617b95444482297980a914d839284&units=metric")

                await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=54d617b95444482297980a914d839284&units=metric`)
                    .then(res => res.json())
                    .then(result => {
                        // let icon = "noto:sun";
                        pauseFunction();
                        setCurrentWeatherInfo({
                        temp: round(result.main.temp,1),
                        feels_like: round(result.main.feels_like,1),
                        temp_min: round(result.main.temp_min,1),
                        temp_max: round(result.main.temp_max,1),
                        city: result.name,
                        country: result.sys.country,
                        sunrise: formatTime(result.sys.sunrise),
                        sunset: formatTime(result.sys.sunset),
                        humidity:result.main.humidity,
                        wind: round(result.wind.speed,1),
                        icon: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                        detail:result.weather[0].main,
                        description: result.weather[0].description,
                        time_requested: formatTime(result.dt)
                    })
                    // console.log(result)

                
                // getForecastWeather(result.coord.lat,result.coord.lon);
                
                // setLat(result.coord.lat)
                // setLon(result.coord.lon)
                // console.log(`Set lat: ${result.coord.lat} and lon: ${result.coord.lon}`)
            },)
        }
        }catch (error) {
            console.log(error);
        }
    }

    // const getForecastWeather = async (latitude,longitude) => {
    
    //       await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely&appid=54d617b95444482297980a914d839284&units=metric")
    //       .then(res => res.json())
    //       .then(result => {
    //     //     setForecastInfo({
    //     //       temp_min: round(result.daily[0].temp.min,1),
    //     //       temp_max: round(result.daily[0].temp.max,1),
    //     //       sunrise: formatTime(result.daily[0].sunrise),
    //     //       sunset: formatTime(result.daily[0].sunset),
    //     //       icon: result.daily[0].weather[0].icon,
    //     //       detail: result.daily[0].weather[0].main,
    //     //     })
    //     //     console.log(result)
    //       })
    // }


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
        console.log("app init > loading? > " + isLoading)
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
        console.log("Loading? > " + isLoading);
        console.log(currentWeatherInfo);
    },[isLoading])

    return(
        <>
            <div className="App">
                
                <div className="container">
                    { isLoading && 
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    }
                    { !isLoading && 
                        <CurrentWeather 
                        currentWeatherInfo={currentWeatherInfo}
                        lat={lat}
                        lon={lon}
                        isLoading={isLoading}
                        
                    />
                    }
                    
                    
                </div>
            </div>
            <Footer />
        </>
    );
}
export default App;