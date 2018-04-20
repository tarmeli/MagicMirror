import React from "react";
import Loading from "./Loading";

const Weather = ({ weather }) => {
  if (weather.length === 0) {
    return <Loading loading="Weather" />;
  } else {
    console.log(weather);
    return (
      <div className="flex-column center-items">
        <div className="flex-row">
          <div className="flex-cell center-items">{weather.name}</div>
        </div>
        <div className="flex-row">
          <div className="flex-cell center-items">
            <div className="flex-column">
              <div className="flex-row">
                <img
                  src={
                    "http://openweathermap.org/img/w/" +
                    weather.weather[0].icon +
                    ".png"
                  }
                  alt={weather.weather[0].description}
                />
              </div>
              <div className="flex-row">{weather.weather[0].main}</div>
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-cell center-items">
            {weather.main.temp}&deg;C
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
