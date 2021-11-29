import React, {useState} from "react";
import "./style/style.sass";
// import { Icon } from '@iconify/react';
// import moment from "moment";
import CurrentWeather from "./components/CurrentWeather";
import Footer from "./components/footer";

function App() {
    
    // States
    const [currentWeatherInfo,setCurrentWeatherInfo] = useState({
        temp: undefined,
        feels_like: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        icon: undefined,
        detail: undefined,
        description: undefined
      });



    return(
        <div className="App">
            <CurrentWeather 
                currentWeatherInfo={currentWeatherInfo}
                
            />

            <Footer />




        </div>

    );
}
export default App;