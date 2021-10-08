import React from "react";
import "./styles.css";
import data from "./WeatherData.js";
import WeatherIcons from "./WeatherIcons";

const Icons = data.map((record, index) => {
  return <WeatherIcons key = {index} {...record}/>
})

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>{Icons}</section> 
    </div>
  );
}
