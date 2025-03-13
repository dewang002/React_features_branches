import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const token = '57aa9d73be95fef5e3340aa03d77c6e4'

  const fetchData = async () => {
    try{
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`)
      const data = await res.data;
      setWeather(data)
    }catch(err){
      console.log(err+" something went wrong")
    }
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(city){
        fetchData()
      }
    },300)
    if(!city)setWeather(null)
      return ()=>clearTimeout(timer)
  },[city])
  return (
    <div className="w-full h-screen ">
      <div className="flex felx-col justify-center">
      <input placeholder="type your place name ..." className="border w-sm p-2 rounded" type="text" name="" value={city} onChange={(e)=>setCity(e.target.value)} />
      </div>
     <div className="flex flex-col items-center">
      <h1>{weather?.name}</h1>
      <h1>{weather?.weather[0].description}</h1>
      <h1>{weather?.main.temp}</h1>
     </div>
    </div>
  )
}

export default App