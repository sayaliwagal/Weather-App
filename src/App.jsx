import React, { useContext } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";
import WeatherBox from "./Components/WeatherBox";
import { getMetrics } from "./metrics.js";
import { getFiveDayForecast } from "./Hooks/helper.js";
import { CircleLoader } from "react-spinners";
import ForcastCard from "./Components/ForcastCard.jsx";
import { WeatherContext } from "./Context/WeatherContext.jsx";

const App = () => {
 const {
    city,
    setCity,
    weatherData,
    forcastData,
    loading,
    error,
    handleSearch,
 } = useContext(WeatherContext);

  return (
    <div className="relative flex justify-center items-center px-4 min-h-screen bg-slate-900 ">
      <div className="max-w-5xl w-full shadow-2xl p-8 bg-slate-800  backdrop-blur-sm rounded-2xl space-y-6 border-gray-700/20">
        {/* header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative ">
          <h1 className="font-bold text-4xl text-slate-100 tracking-wide">
            Weather Show
          </h1>
          <div className="w-full md:w-auto relative">
            <SearchBar onSearch={handleSearch} />

          </div>
        </div>
        {loading && (
          <div className="flex justify-center">
            <CircleLoader color="white" size={200} speedMultiplier={1} />
          </div>
        )}
        {error && (
          <div className="p-4 text-red-500 bg-red-950 bg-opacity-90 text-3xl text-center border-red-700 rounded-lg">
            {error}
          </div>
        )}
        {!loading && weatherData && forcastData && !error && (
          <>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-slate-700 bg-opacity-75 border border-slate-500 backdrop-blur-sm rounded-xl p-6 shadow-xl space-y-4 md:space-y-0">
              <WeatherDisplay weatherData={weatherData} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-50">
              {getMetrics(weatherData).map((item) => {
                return (
                  <WeatherBox
                    key={item.id}
                    icon={<item.icon />}
                    title={item.title}
                    value={item.value}
                  />
                );
              })}
            </div>
            <div className=" mt-6">
              <h2 className="text-4xl text-slate-50 ">Daily Forcast</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-2xl text-slate-50 my-4">
                {getFiveDayForecast(forcastData) .map((day,index) => {
                  return (<ForcastCard 
                       key={index}
                       date={day.date}
                       temp={day.temp}
                       icon={day.icon}
                       weather={day.weather}
                  />)

                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
