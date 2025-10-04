import React from 'react'

const WeatherBox = ({icon, title, value}) => {
  return (
    <div className='backdrop-blur-sm rounded-2xl bg-slate-700 bg-opacity-75 p-4 shadow-xl flex flex-col items-center space-y-2 border border-slate-500 hover:scale-105 transition:transform'>
        <div className="text-slate-50 text-3xl">{icon}</div>
        <h3 className="text-lg font-semibold"> {title}</h3>
        <p className="text-xl font-bold">{value}</p>
      
    </div>
  )
}

export default WeatherBox
