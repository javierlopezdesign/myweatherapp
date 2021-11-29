import React from "react";
import "../style/style.sass";
import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentWeather = ({weatherInfo}) => {


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
                    <h1>Denny, Uk</h1>
                    <h3>Tuesday, 23rd of November of 2021</h3>
                    <h3>Last update: 10:33</h3>
                    {/* <button>C</button> */}
                </div>
                <div className="weatherContainer">
                    <Icon className="currentWeatherIcon"icon="wi:night-cloudy-windy" />
                    <h2>Cloudy</h2>
                </div>
                <div className="tempBox">
                    <h1>15`</h1>
                    <div className="feelsBox">
                        icon
                        <h2>9`</h2>
                    </div>
                </div>
                <div className="statsBox">
                    <div className="daytime">
                        icon
                        <p>08:18</p>
                        <p>18:18</p>
                    </div>    
                    <div className="minmaxtemp">
                        icon
                        <p>min: -2</p>
                        <p>max: 4</p>
                    </div>
                    <div className="wind">
                        icon
                        <p>15 km/h</p>
                    </div>
                    <div className="humidity">
                        icon
                        <p>85%</p>
                    </div>
                </div>    
            </div>
        </>
          
    )
}

export default CurrentWeather;