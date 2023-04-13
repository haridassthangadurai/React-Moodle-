
import { useEffect, useState } from "react";
import './weather.css'

const api = {
  key: "5aa3f959dccd9ed0cde889cb7dfb4a97",
  base: "https://api.openweathermap.org/data/2.5/",
};

 export function Weatherindia() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [pressed, setPressed] = useState()
  useEffect(()=>{
  
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result) });
  
},[pressed])
const handleClick = () => {
  setPressed(weather);
}
  return (
    <div className="Weatherindia">
      <header className="Weatherindia-header">
      <h1>Weather App</h1>
        <div className="Weatherbox">
       
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
        </div>
      </header>
    </div>
  );
}

