import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const AnimePage = () => {
  let {mal_id} = useParams();
  
  const [animeData, setAnimeData]=useState();

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
    const resData = await res.json();
    setAnimeData(resData.data)
}

useEffect(()=>{
  getData()
}, [mal_id])
if (!animeData){
  return 'Is Loading . . .'
}
  return (
  
    <div>
      <div className="card" >
                <img className='anime-img' src={animeData.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{animeData.title}</h4>
                  <div className="overlay">
                    <h4>{animeData.title_japanese}</h4>
                    <h3>SYNOPSIS</h3> 
                     <div className="synopsis">
                      <p>{animeData.synopsis}</p>
                    </div>
    
                  </div>
                </div>
              </div>
      
    </div>
      )
}

export default AnimePage
