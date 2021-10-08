import React from "react";
import data from "./WeatherData.js";

export default function WeatherIcons(props) {
    return (
        <div className="weather">
        <img src={props.img} alt="" />
        <p><span>conditions:</span> {props.conditions}</p>
        <p><span>time:</span> {props.time}</p>
    </div>
    );    
}