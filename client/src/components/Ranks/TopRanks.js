import React from 'react'
import { useState , useEffect} from 'react';
import AnimeCard from './cards/AnimeCard';
import MangaCard from './cards/MangaCard';
import PeopleCard from './cards/PeopleCard';
import CharacterCard from './cards/CharacterCard';
import ReviewCard from './cards/ReviewCard';

const TopRanks = () => {
    //toggleButton Feature 
    const [selected, setSelected]=useState('anime');

    //get top 25 anime series based on popularity/ranking
    const [topAnime, setTopAnime]=useState([]);

    const getTopAnime=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/top/anime`)
        const resData =await res.json();
    
        setTopAnime(resData.data);
        setSelected('anime')
    }

 //get top manga series based on popularity/ranking
const [topManga, setTopManga]=useState([]);

const getTopManga=async()=>{
    const res =await fetch(`https://api.jikan.moe/v4/top/manga`)
    const resData =await res.json();

    setTopManga(resData.data);
    setSelected('manga')
}

//  get top people series based on popularity/ranking
 const [topPeople, setTopPeople]=useState([]);

 const getTopPeople=async()=>{
     const res =await fetch(`https://api.jikan.moe/v4/top/people`)
     const resData =await res.json();
 
     setTopPeople(resData.data);
     setSelected('people')
 }

 //  get top character series based on popularity/ranking
 const [topCharacter, setTopCharacter]=useState([]);

 const getTopCharacters=async()=>{
     const res =await fetch(`https://api.jikan.moe/v4/top/characters`)
     const resData =await res.json();
 
     setTopCharacter(resData.data);
     setSelected('character')
 }

  //  get top people series based on popularity/ranking
  const [topReview, setTopReview]=useState([]);

  const getTopReviews=async()=>{
      const res =await fetch(`https://api.jikan.moe/v4/top/reviews`)
      const resData =await res.json();
  
      setTopReview(resData.data);
      setSelected('review')
  }

//container for selected element to display 
const contentContainer = () =>{
    if(selected === 'anime'){
        return <AnimeCard topAnime={topAnime}/>
    }else if (selected === 'manga'){
        return <MangaCard topManga={topManga}/>
    }else if (selected === 'people'){
        return <PeopleCard topPeople={topPeople}/>
    }else if (selected === 'character'){
        return <CharacterCard topCharacter={topCharacter}/>
    }else if (selected === 'review'){
        return <ReviewCard topReview={topReview}/>
    }else{
        return <AnimeCard topAnime={topAnime}/>
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
                    <button className='button-17' onClick={getTopCharacters}>Characters</button>
                    <button className='button-17' onClick={getTopReviews}>Reviews</button>
                </div>
                <div className='rankContainer'>
                  {contentContainer()}
                </div>
               
                </div>
    )
}

export default TopRanks
