import React from "react";

export default function WeatherCondTime(props) {
    return (
        <div className="weather">
            <p><span>conditions:</span> {props.conditions}</p>
            <p><span>time:</span> {props.time}</p>
        </div>

    );
    
}