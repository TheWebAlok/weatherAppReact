import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.02,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app container mt-4">

      <div className="row">
        <div className="col-md-2">
          <h2 className="text-center text-warning heading mb-4">Check Weather in Your City</h2>

        </div>

        <div className="col-md-3">
          <SearchBox updateInfo={updateInfo} />

        </div>

        <div className="col-md-7">
          <InfoBox Info={weatherInfo} />
        </div>
      </div>
    </div>
  );

}
