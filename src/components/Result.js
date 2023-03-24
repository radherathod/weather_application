import React from 'react'

export default function Result({ weatherData }) {
  return (
    <div className='align-content: center; shadow-xl mt-5 p-2 '>
      {
        weatherData.length !== 0
        ?
        <>
        <h2 className='text-4xl text-center'>{weatherData.name}</h2>
      <div className='text-2xl flex justify-around mt-5'>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <div>Max temp(f) : {weatherData.main.temp_max}</div>
      <div>Min temp(f) : {weatherData.main.temp_min}</div>
      </div>
      <div className='text-2xl flex justify-around mt-3'>
      <div>Humudity : {weatherData.main.humidity} </div>
      <div>Pressure : {weatherData.main.pressure} </div>
      
      </div>
      <div className='text-2xl flex justify-around mt-3'>
      <div>Sunrise : {weatherData.sys.sunrise} </div>
      <div>Wind Speed : {weatherData.wind.speed} </div>
      
      </div>
      <div className='text-2xl flex justify-around mt-3'>
      <div>Sunset : {weatherData.sys.sunset} </div>
      <div>Sea_level:{weatherData.main.sea_level} </div>
      
      </div>
      
      <div className='text-2xl flex justify-around mt-2'>
      <div>
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt=''/>
      </div>
      <div>{weatherData.weather[0].main}</div>
      </div>
        </>
        :
        <>
        <div  className='text-center p-3 text-2xl'> Result </div>
        </>
}  
    </div>
      
      
  )
}
