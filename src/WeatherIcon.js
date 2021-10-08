import React from "react";

export default function WeatherIcon(props) {
   return (
    <div className="weather">
        <img src={props.img} alt="" />
    </div>
   );
};