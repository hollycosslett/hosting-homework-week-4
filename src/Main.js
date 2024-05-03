import React from "react";

export default function Main() {
    return ( <main>
        <div className="weather-information">
          <div className="city-container">
            <h1 className="city" id="city">London</h1>
            <p className="weather-details">
              <span id="time">Sunday, 11.37am</span>
              <br />
              <span id="description">Sunny</span>
              <br />
              Humidity:
              <span className="weather-measurements" id="humidity">10%</span> Wind:
              <span className="weather-measurements" id="wind-speed">5 mph</span>
            </p>
          </div>
          <div className="weather-temperature-container">
            <div className="weather-icon" id="icon">☀️</div>
            <div className="weather-degrees" id="weather-degrees">18</div>
            <div className="weather-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>

    )
}