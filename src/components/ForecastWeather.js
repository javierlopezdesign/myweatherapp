import React from "react";
import "../style/style.sass";
// import { Icon } from '@iconify/react';
// import moment from "moment";

const ForecastWeather = ({forecastInfo}) => {

    return(
        <>  
            <h2>Forecast Weather</h2>
            {forecastInfo.temp_min}
        </>
          
    )
}

export default ForecastWeather;