import React from "react";
import "../style/style.sass";
import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentWeather = ({currentWeatherInfo}) => {
    // console.log(currentWeatherInfo)

    return(
        <>
            {/* <h2>city: {weatherInfo.city}, {weatherInfo.country} </h2> */}
            {/* <h3>Date and Time</h3> */}
                {/* <h3>Today...</h3> */}
                {/* <img className="weatherIcon" src={weatherInfo.icon} alt={weatherInfo.detail} /> */}
                {/* <div className="weatherDetail">Detail: {weatherInfo.detail}</div>
                <div className="weatherDescription">Description: {weatherInfo.description}</div>
                <div className="weatherTemp">Temp: {weatherInfo.temp}</div>
                <div className="weatherFeel">Temp_like: {weatherInfo.feels_like}</div>
                <div className="weatherTemp">Temp Min: {weatherInfo.temp_min}</div>
                <div className="weatherTemp">Temp Max: {weatherInfo.temp_max}</div>
                <div className="weatherSunrise">Temp Sunrise: {weatherInfo.sunrise}</div>
                <div className="weatherSunset">Temp Sunset: {weatherInfo.sunset}</div> */}
            
            <div className="currentWeather">
          

                <div className="dayData">
                    <h1>{currentWeatherInfo.city}, {currentWeatherInfo.country}</h1>
                    <h3>Tuesday, 23rd of November of 2021</h3>
                    <h3>Last update: 10:33</h3>
                    {/* <button>C</button> */}
                </div>
                <div className="weatherContainer">
                    <Icon className="currentWeatherIcon" icon="wi:night-cloudy-windy" />
                    <h2>{currentWeatherInfo.detail}</h2>
                </div>
                <div className="tempBox">
                    <h1>{currentWeatherInfo.temp}<span>o</span></h1>
                    <div className="feelsBox">
                        <Icon className="feelsIcon" icon="carbon:temperature-feels-like" />
                        <h2>{currentWeatherInfo.feels_like}<span>o</span></h2>
                    </div>
                </div>
                <div className="statsBox">
                    <div className="daytime">
                        <Icon className="statIcon" icon="mi:sunrise-alt" />
                        <p>{currentWeatherInfo.sunrise}</p>
                        <p>{currentWeatherInfo.sunset}</p>
                    </div>    
                    <div className="minmaxtemp">
                        <Icon className="statIcon" icon="fluent:temperature-24-filled" />
                        <p>min: {currentWeatherInfo.temp_min}</p>
                        <p>max: {currentWeatherInfo.temp_max}</p>
                    </div>
                    <div className="wind">
                        <Icon className="statIcon" icon="lucide:wind" />
                        <p>{currentWeatherInfo.wind} km/h</p>
                    </div>
                    <div className="humidity">
                        <Icon className="statIcon" icon="ic:outline-water-drop" />
                        <p>{currentWeatherInfo.humidity}%</p>
                    </div>
                </div>    
            </div>
        </>
          
    )
}

export default CurrentWeather;