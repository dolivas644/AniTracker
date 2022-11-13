import React from 'react'
import { useState , useEffect} from 'react';
import AnimeCard from './cards/AnimeCard';
import MangaCard from './cards/MangaCard';
import PeopleCard from './cards/PeopleCard';

const TopRanks = () => {
    //toggleButton Feature 
    const [selected, setSelected]=useState('');

    //get top 25 anime series based on popularity/ranking
    const [topAnime, setTopAnime]=useState([]);

    const getTopAnime=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/top/anime`)
        const resData =await res.json();
    
        setTopAnime(resData.data);
        setSelected('anime')
    }
    // useEffect(()=>{
    //   getTopAnime()
    // },[])


 //get top manga series based on popularity/ranking
const [topManga, setTopManga]=useState([]);

const getTopManga=async()=>{
    const res =await fetch(`https://api.jikan.moe/v4/top/manga`)
    const resData =await res.json();

    setTopManga(resData.data);
    setSelected('manga')
}

//  get top manga series based on popularity/ranking
 const [topPeople, setTopPeople]=useState([]);

 const getTopPeople=async()=>{
     const res =await fetch(`https://api.jikan.moe/v4/top/people`)
     const resData =await res.json();
 
     setTopPeople(resData.data);
     setSelected('people')
 }
const contentContainer = () =>{
    if(selected === 'anime'){
        return <AnimeCard topAnime={topAnime}/>
    }else if (selected === 'manga'){
        return <MangaCard topManga={topManga}/>
    }else if (selected === 'people'){
        return <PeopleCard topPeople={topPeople}/>
    }
}
// useEffect(()=>{
//   getTopManga()
//   getTopAnime()
//   getTopPeople()
// },[])
    return (
        <div className="buttonGroup">

                <div >
                    <button className='button-17' onClick={getTopAnime} >Anime</button>
                    <button className='button-17' onClick={getTopManga}>Manga</button>
                    <button className='button-17' onClick={getTopPeople}>People</button>
                    <button className='button-17' >Characters</button>
                    <button className='button-17'>Reviews</button>
                </div>
                <div className='rankContainer'>
                  {/* {selected} */}
                  {/* {
                    {
                        A: <div> <AnimeCard topAnime={topAnime}/></div>,
                        B:<div> <MangaCard topManga={topManga}/></div>,
                        // C:<div> <PeopleCard topPeople={topPeople}/></div>,
                    }[selected]
                  } */}
                  {contentContainer()}
                </div>
               
                </div>
    )
}

export default TopRanks
