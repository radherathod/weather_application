import React, { useRef } from 'react'

export default function Search(props) {

  const searchinput = useRef()
  return (
    <div className='flex shadow-xl'>
     <input type="search" placeholder='Enter City Name' onChange={()=> props.eventHandler(searchinput.current.value)} 
     value={props.searchData} ref={searchinput} className='border border-black w-full p-3 text-2xl' />
     <button onClick={props.searchWeather} className='p-3 bg-slate-600 text-white'>Search</button>
    </div>
  )
}
