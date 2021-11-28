import React from "react";
import "../style/style.sass";
// import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentWeather = ({weatherInfo}) => {

    return(
        <>
            <h2>city: {weatherInfo.city}, {weatherInfo.country} </h2>
            <h3>Date and Time</h3>
            <div className="weatherInfoCurrent">
                <h3>Today...</h3>
                <img className="weatherIcon" src={weatherInfo.icon} alt={weatherInfo.detail} />
                <div className="weatherDetail">Detail: {weatherInfo.detail}</div>
                <div className="weatherDescription">Description: {weatherInfo.description}</div>
                <div className="weatherTemp">Temp: {weatherInfo.temp}</div>
                <div className="weatherFeel">Temp_like: {weatherInfo.feels_like}</div>
                <div className="weatherTemp">Temp Min: {weatherInfo.temp_min}</div>
                <div className="weatherTemp">Temp Max: {weatherInfo.temp_max}</div>
                <div className="weatherSunrise">Temp Sunrise: {weatherInfo.sunrise}</div>
                <div className="weatherSunset">Temp Sunset: {weatherInfo.sunset}</div>
          
            </div>




            
           {/* <button className="refreshButton" onClick={() => {
                // getForecastWeather();
                // getCurrentWeather();
                }
            }>
            <Icon className="refreshIcon" icon="eva:refresh-outline" />
          </button>
          */}
        </>
          
    )
}

export default CurrentWeather;