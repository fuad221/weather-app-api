import React, { useState, useEffect }  from 'react'

const WeatherDetails = () => {
    const [weatherState, setWeatherState] = useState("");

    return (
        <div>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
            </article>
        </div>
    )
}

export default WeatherDetails

// <i class="wi wi-night-sleet"></i>