import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  const [input, setInput] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
    if(input.trim() !== "")
      onSearch(input);
    setInput("");
  }
  return (
    <div className='flex items-center'>
         <input 
         type="search" 
         className='px-4 py-2 w-full bg-slate-800 placeholder-slate-50 text-slate-50 border-2 border-gray-700 rounded-l-3xl focus:outline-none focus:ring-2 focus:ring-purple-300'
         placeholder='Enter City Name'
         value={input}
         onChange={(e) => setInput(e.target.value)}
         id = "search"/>
         <button 
         className='bg-slate-900 px-4 py-2 rounded-r-3xl text-slate-50 border-2 border-gray-700 font-bold font-stretch-50% cursor-pointer'
         onClick={(e) => {handleSubmit(e)}}>
          Search
          </button>
    </div>
  )
}

export default SearchBar
