import React from "react";
import "./styles.css";
import data from "./WeatherData.js";
import WeatherIcons from "./WeatherIcons";
import WeatherIcon from "./WeatherIcon";
import WeatherCondTime from "./WeatherCondTime";

const Icons = data.map((record, index) => {
  return <WeatherIcons key = {index} {...record}/>
})

const Icon = data.map((record, index) => {
  return <WeatherIcon key = {index} img = {record.img} />
})

const IconCondTime = data.map((record, index) => {
  return <WeatherCondTime key = {index} conditions = {record.conditions} time = {record.time} />
})

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      {/* renders everything */}
        {/* <section>{Icons}</section>   */}
      {/* renders only images   */}
      {Icon} 
      {/* renders only conditions and time  */}
      {IconCondTime}
    </div>
  );
}
