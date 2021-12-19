import React from "react";
import "../style/style.sass";
import { Icon } from '@iconify/react';
// import moment from "moment";

const ForecastWeather = ({currentWeatherInfo, lat, lon, isLoading}) => {
    // console.log(currentWeatherInfo)

    return(
        <div className="forecastContainer">
            <div className="forecastBox">
                <p>Mon</p>
                <img className="currentWeatherIcon" src={currentWeatherInfo.day1.icon} alt="Weather Icon" />
                <p>{currentWeatherInfo.day1.temp}&deg;C</p>
            </div>    
            <div className="forecastBox">
                <p>Tue</p>
                
                <img className="currentWeatherIcon" src={currentWeatherInfo.day2.icon} alt="Weather Icon" />
                <p>{currentWeatherInfo.day2.temp}&deg;C</p>

            </div>
            <div className="forecastBox">
                <p>Wed</p>
                
                <img className="currentWeatherIcon" src={currentWeatherInfo.day3.icon} alt="Weather Icon" />
                <p>{currentWeatherInfo.day3.temp}&deg;C</p>

            </div>
            <div className="forecastBox">
                <p>Thu</p>
                
                <img className="currentWeatherIcon" src={currentWeatherInfo.day4.icon} alt="Weather Icon" />
                <p>{currentWeatherInfo.day4.temp}&deg;C</p>

            </div>
            <div className="forecastBox">
                <p>Fri</p>
                
                <img className="currentWeatherIcon" src={currentWeatherInfo.day5.icon} alt="Weather Icon" />
                <p>{currentWeatherInfo.day5.temp}&deg;C</p>

            </div>
        </div>
    )
}

export default ForecastWeather;