import { WeatherDetails, StyleCss } from '../Reference-import'
import React, { useState, useEffect } from 'react'

export const SearchMain = () => {
    const [searchTerm, setSearchTerm] = useState("")



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
                        onClick={}>
                        Search
                    </button>
                </div>
            </div>
            <WeatherDetails />
        </>
    )

}

export default SearchMain