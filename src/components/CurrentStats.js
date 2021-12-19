import React from "react";
import "../style/style.sass";
import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentStats = ({currentWeatherInfo, lat, lon, isLoading}) => {
    // console.log(currentWeatherInfo)

    return(
        <div className="statsContainer">
            <div className="statsBox">
                <Icon className="statIcon" icon="mi:sunrise-alt" />
                <p>{currentWeatherInfo.sunrise}</p>
                <p>{currentWeatherInfo.sunset}</p>
            </div>    
            <div className="statsBox">
                <Icon className="statIcon" icon="fluent:temperature-24-filled" />
                <p>min: {currentWeatherInfo.temp_min}&deg;C</p>
                <p>max: {currentWeatherInfo.temp_max}&deg;C</p>
            </div>
            <div className="statsBox">
                <Icon className="statIcon" icon="lucide:wind" />
                <p>{currentWeatherInfo.wind} km/h</p>
            </div>
            <div className="statsBox">
                <Icon className="statIcon" icon="ic:outline-water-drop" />
                <p>{currentWeatherInfo.humidity}%</p>
            </div>
        </div>
    )
}

export default CurrentStats;