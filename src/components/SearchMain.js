import { WeatherDetails, StyleCss } from '../Reference-import'
import React, { useState, useEffect } from 'react'

export const SearchMain = () => {
    const [searchTerm, setSearchTerm] = useState("hamburg");
    const [tempInfo, setTempInfo] = useState({});


    const getWeatherInfo = async () => {
        // i got the link to fetch it form https://openweathermap.org/current
        try {
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=87fafab6d86f15900aaa634c434c2fe0`;
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data);
            const { temp, humidity, pressure } = data.main;
            const { main: weatherType } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunset,
              };

              setTempInfo(myNewWeatherInfo);


        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
      }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="Search city.."
                        id="search"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />

                    <button
                        className="searchButton"
                        onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <WeatherDetails {...tempInfo}/>
        </>
    )

}

export default SearchMain