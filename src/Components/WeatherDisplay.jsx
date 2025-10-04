import React from "react";

const WeatherDisplay = ({weatherData}) => {
  return (
    <>
      <div className="space-y-2 text-center md:text-left">
        <div className="flex item-start justify-center md:justify-start space-x-2">
          <h2 className="text-7xl md:text-8xl text-slate-50 font-bold">{Math.round(weatherData.main.temp )}</h2>
          <span className="text-3xl md:text-5xl text-slate-50">°C</span>
        </div>
        <h3 className="text-slate-50 text-xl md:text-2xl font-medium">
          {weatherData.name}, {weatherData.sys.country}
        </h3>
        <h4 className="text-slate-50 text-lg md:text-xl capitalize">
          {weatherData.weather[0].description}
        </h4>
      </div>
      <div className="text-slate-50 ">
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="" />  
      </div>
    </>
  );
};

export default WeatherDisplay;
