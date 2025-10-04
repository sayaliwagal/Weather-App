import { createContext, useState, useEffect } from "react";
import useCallApi from "../Hooks/useCallApi";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState(
    () => localStorage.getItem("lastCity") || ""
  );
  const [forcastData, setForcastData] = useState(null);
  const [weatherData, setWeaterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherUrl =
    city &&
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl =
    city &&
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch data using useCallApi
  const weatherApi = useCallApi(weatherUrl);
  const forcastApi = useCallApi(forecastUrl);
  useEffect(() => {
    if (weatherApi) {
      if (weatherApi.cod && weatherApi.cod !== 200) {
        setError(weatherApi.message || "Something went wrong");
        // setLoading(false);
        setWeaterData(null);
        setForcastData(null);
      } else {
        setWeaterData(weatherApi);
        setForcastData(forcastApi);
        setError(null);
      }
      setLoading(false); //done loading
    }
  }, [weatherApi, forcastApi]);

  //Save city in localStorage
  useEffect(() => {
    if (city) localStorage.setItem("lastCity", city);
  }, [city]);

  const handleSearch = (cityName) => {
    setCity(cityName);
    setLoading(true);
    setError(null);
    setWeaterData(null);
  };

  const contextValue = {
    city,
    setCity,
    weatherData,
    forcastData,
    loading,
    error,
    handleSearch,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
