import React from "react";
// import "../style/style.sass";
import "../style/currentweather.sass";

import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentWeather = ({currentWeatherInfo, lat, lon, isLoading}) => {
    // console.log(currentWeatherInfo)

    return(
        <div className="currentWeatherContainer">
            <div className="currentWeatherIconBox">
                <img className="currentWeatherIcon" src={currentWeatherInfo.icon} alt="Weather Icon" />
                {/* <Icon className="currentWeatherIcon" icon="wi:night-cloudy-windy" /> */}
                <h2 className="currentWeatherDetail">{currentWeatherInfo.detail}</h2>
            </div>
            <div className="tempBox">
                <h1  className="currentWeatherTemp">{currentWeatherInfo.temp}&deg;C</h1>
                <div className="feelsBox">
                    <Icon className="feelsIcon" icon="carbon:temperature-feels-like" />
                    <h2>{currentWeatherInfo.feels_like}&deg;C</h2>
                </div>
            </div>
        </div>
          
    )
}

export default CurrentWeather;