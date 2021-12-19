import React from "react";
import "../style/style.sass";
import { Icon } from '@iconify/react';
// import moment from "moment";

const CurrentLocation = ({currentLocation, currentWeatherInfo, lat, lon, isLoading}) => {
    // console.log(currentWeatherInfo)
    // console.log(currentLocation)

    return(
        <div className="LocationBox">
            <h1>{currentLocation.city}, {currentLocation.country}</h1>
            {/* <h3>Tuesday, 23rd of November of 2021</h3> */}
            <h3>Last update: {currentWeatherInfo.time_requested}</h3>
            <h3>Lat:{lat}, Lon:{lon}</h3>
        </div>
    )
}

export default CurrentLocation;