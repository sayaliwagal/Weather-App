import {FaDroplet, FaWind} from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { LuSun } from "react-icons/lu";

export const getMetrics = (data) => [
    {
        id:"humidity",
        title: "Humidity",
        value: data?.main?.humidity?`${data.main.humidity}%`: "--",
        icon: FaDroplet,
       },
    {
        id:"pressure",
        title: "Pressure",
        value: data?.main?.pressure?`${data.main.pressure}pha`: "--",
        icon: SlSpeedometer,
    },
    {
        id:"wind",
        title: "Wind Speed",
        value: data?.wind?.speed?`${data.wind.speed}km/h`: "--",      
         icon: FaWind,
    },
    {
        id:"feels",
        title: "Feels Like",
        value: data?.main?.feels_like?`${Math.round(data.main.feels_like)}°C`: "--",
        icon: LuSun,

    },
]