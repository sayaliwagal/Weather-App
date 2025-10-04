import React from 'react'

const ForcastCard = ({ date: forecastDate, temp, icon, weather }) => {
  const dayName = new Date(forecastDate).toLocaleDateString("en-US", {
    weekday: "short",
  });
  return (
     <div className='backdrop-blur-sm rounded-2xl bg-slate-700 bg-opacity-75 p-2 shadow-xl flex flex-col items-center space-y-2 border border-slate-500 hover:scale-105 transition:transform'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather} className="mx-auto w-14 h-14" />
        <h3 className="text-lg font-semibold">{temp}C</h3>
        <p className="text-xl font-bold capitalize">{weather}</p>
        <h3 className="text-xl font-bold text-slate-50">{dayName}</h3>
      
    </div>
  )
}

export default ForcastCard
