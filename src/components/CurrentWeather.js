import React from "react";
import "../style/style.sass";
import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentWeather = ({currentWeatherInfo, lat, lon}) => {
    // console.log(currentWeatherInfo)

    return(
        <div className="currentWeatherContainer">

            <div className="dayData">
                <h1>{currentWeatherInfo.city}, {currentWeatherInfo.country}</h1>
                {/* <h3>Tuesday, 23rd of November of 2021</h3> */}
                <h3>Last update: {currentWeatherInfo.time_requested}</h3>
                <h3>Lat:{lat}, Lon:{lon}</h3>
            </div>
            <div className="currentWeather">
          

                <div className="weatherContainer">
                    <div className="currentWeatherIconBox">
                        <img className="currentWeatherIcon" src={currentWeatherInfo.icon} alt="" />
                        {/* <Icon className="currentWeatherIcon" icon="wi:night-cloudy-windy" /> */}
                        <h2>{currentWeatherInfo.detail}</h2>
                    </div>
                    <div className="tempBox">
                        <h1>{currentWeatherInfo.temp}<span>o</span></h1>
                        <div className="feelsBox">
                            <Icon className="feelsIcon" icon="carbon:temperature-feels-like" />
                            <h2>{currentWeatherInfo.feels_like}<span>o</span></h2>
                        </div>
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
        </div>
          
    )
}

export default CurrentWeather;