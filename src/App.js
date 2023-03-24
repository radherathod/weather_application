import React, { useState } from 'react'
import Result from './components/Result'
import axios from 'axios'
import Search from './components/Search'

export default function App() {

  const[search,setSearch]=useState("")
  const[weather,setWeather]=useState([])

  const changeSearch = (value)=>{
    setSearch(value)
  }

  const searchWeatherHandler = ()=>{
    if(search !== ""){
       axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a4213f49648402d6fa1792c7ee7958f2`
        )
  .then(
    (response)=>{
      console.log(response.data)
      setWeather(response.data);
    }
  )
  .catch(
    (error)=>{
      console.log(error)
    }
  )
    }

  }

  return (

    <div className="max-w-[550px] mx-auto mt-3 p-3 bg-cyan-50">
      <h2 className='text-center p-3 text-5xl '>Weather App</h2>

    <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler}/>
    <Result weatherData={weather} />
    </div>
  )
}
