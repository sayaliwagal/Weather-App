import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";
import WeatherBox from "./Components/WeatherBox";
import useCallApi from "./Hooks/useCallApi";

const App = () => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [suggestions, setSuggestions] = useState([]);
  const [city, setCity] = useState("");
  // const [weatherData, setWeaterData] = useState([]);


  const handleSearch = (cityName) => {
    setCity(cityName);
  }
  const url = city !==""?
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  :null;
  const weatherData = useCallApi(url);

  console.log(weatherData);
  return (
    <div className="relative flex justify-center items-center px-4 min-h-screen bg-slate-900 ">
      <div className="max-w-5xl w-full shadow-2xl p-8 bg-slate-800  backdrop-blur-sm rounded-2xl space-y-6 border-gray-700/20">
        {/* header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative ">
          <h1 className="font-bold text-4xl text-slate-100 tracking-wide">
            Weather Show
          </h1>
          <div className="w-full md:w-auto relative">
            <SearchBar onSearch={handleSearch}/>
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-slate-950 text-slate-50 mt-2 rounded-xl overflow-hidden shadow-md max-h-48 overflow-y-auto">
                {suggestions.map((s, index) => {
                  return (
                    <li
                      className="px-4 py-2 hover:bg-purple-100 cursor-pointer "
                      key={index}
                    >
                      {i}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-700 bg-opacity-75 border border-slate-500 backdrop-blur-sm rounded-xl p-6 shadow-xl space-y-4 md:space-y-0">
          <WeatherDisplay />
        </div>
            {/* info Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-50">
              <WeatherBox icon = {"Humidity Icon"} title={"Humidity"} value = {"80%"}/>
              <WeatherBox icon = {"Pressure Icon"} title={"Pressure"} value = {"4198pha"}/>
              <WeatherBox icon = {"Wind Speed Icon"} title={"Wind Speed"} value = {"40 km/h"}/>
              <WeatherBox icon = {"Feels like Icon"} title={"Feels like"} value = {"40°C"}/>
            </div>
      </div>
    </div>
  );
};

export default App;
