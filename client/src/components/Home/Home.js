import React from 'react'
import { useState, useEffect } from 'react'
import AnimeList from './AnimeList'
import './Home.css'
const Home = () => {
    const [search, setSearch] = useState('Naruto')
    const [animeData, setAnimeData] = useState();
    // const [animeInfo, setAnimeInfo] = useState() *for side component*

    const getData = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
        const resData = await res.json();
        setAnimeData(resData.data)
    }
    useEffect(() => {
        getData()
    }, [search])

    return (
        <div>
            <div className="search-box">
                <input type="search" placeholder="Search for anime"
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <AnimeList
                animelist={animeData}
                // setAnimeInfo={setAnimeInfo} * for side component*
            />

        </div>
    )
}

export default Home
