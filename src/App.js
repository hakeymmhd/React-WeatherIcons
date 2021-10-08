import React from "react";
import "./styles.css";
import WeatherIcons from "./WeatherIcons";

const Icons = WeatherIcons.map((index, record) => {
  return <WeatherIcons key = {index} {...record}/>
})

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      {Icons}
    </div>
  );
}
