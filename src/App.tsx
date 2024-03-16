import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Content from "./components/Content";
import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherTypes } from "./interfaces/WetherTypes";

const App = () => {

  const [data, setData] = useState<WeatherTypes | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [country, setCountry] = useState<string | null>("Nukus")
  async function getDataWether(country: string | null) {
    setIsLoading(true)
    await axios(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=a045a1a5356155dc5712ab1318762afa`)
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
        setData(null)
      })
  }

  useEffect(() => {
    getDataWether(country)
  }, [])

  return (
    <div className="min-h-[100vh] bg-blue-400 font-mont">
      <Container>
        <h1 className="text-[25px] text-white font-semibold">React Weather App</h1>
        <SearchInput value = {country} setCountry = {setCountry} getWetherData = {getDataWether}/>
        <Content wetherData={data} isLoading = {isLoading}/>
      </Container>
    </div>
  )
}

export default App
