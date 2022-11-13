import React from 'react'
import { useState , useEffect} from 'react';
import AnimeCard from './cards/AnimeCard';
import MangaCard from './cards/MangaCard';

const TopRanks = () => {
    //toggleButton Feature 
    const [selected, setSelected]=useState('');

    //get top 25 anime series based on popularity/ranking
    const [topAnime, setTopAnime]=useState([]);

    const getTopAnime=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/top/anime`)
        const resData =await res.json();
    
        setTopAnime(resData.data);
    }
    useEffect(()=>{
      getTopAnime()
    },[])

    const showAnime = () =>{
        setSelected(<AnimeCard topAnime={topAnime}/>)
    }

 //get top manga series based on popularity/ranking
const [topManga, setTopManga]=useState([]);

const getTopManga=async()=>{
    const res =await fetch(`https://api.jikan.moe/v4/top/manga`)
    const resData =await res.json();

    setTopManga(resData.data);
}
useEffect(()=>{
  getTopManga()
},[])

const showManga = () =>{
    setSelected(<MangaCard topManga={topManga}/>)
}
    return (
        <div className="buttonGroup">

                <div >
                    <button className='button-17' onClick={showAnime} >Anime</button>
                    <button className='button-17' onClick={showManga}>Manga</button>
                    <button className='button-17'>People</button>
                    <button className='button-17' >Characters</button>
                    <button className='button-17'>Reviews</button>
                </div>
                <div className='rankContainer'>
                  {selected}
                </div>
               
                </div>
    )
}

export default TopRanks
