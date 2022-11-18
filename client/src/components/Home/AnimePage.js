import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AnimePage.css';
import Youtube from 'react-youtube';
import CommentForm from './Comment/CommentForm';
const AnimePage = () => {
  let { mal_id } = useParams();

  const [animeData, setAnimeData] = useState();

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }

  useEffect(() => {
    getData()

  }, [mal_id])
  if (!animeData) {
    return 'Is Loading . . .'
  }
  return (

    <div>
      <div className="anime-info" >
        <div className='top-info'>
          <div className='top-left'>
            <img className='anime-info-img' src={animeData.images.jpg.large_image_url} alt="animeImage" />
          </div>
          <div className='top-right'>
            <h4>{animeData.title}</h4>
            <h4>{animeData.title_japanese}</h4>
            <h4>SYNOPSIS</h4>
            {animeData.synopsis}
          </div>
        </div>
        <div className='info-box'>
          <Youtube videoId={animeData.trailer.youtube_id}
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-presentation" />
          <div className='section-box'>
            <div className='infoSec'>
            <div className='header-info'>
              <h3>Type: </h3>
            </div>
            <div className='text'>
              {animeData.type}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Source: </h3>
            </div>
            <div className='text'>
              {animeData.source}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Episodes: </h3>
            </div>
            <div className='text'>
              {animeData.episodes}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Status: </h3>
            </div>
            <div className='text'>
              {animeData.status}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Airing: </h3>
            </div>
            <div className='text'>
              {animeData.airing}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Duration: </h3>
            </div>
            <div className='text'>
              {animeData.duration}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Rating: </h3>
            </div>
            <div className='text'>
              {animeData.rating}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Score: </h3>
            </div>
            <div className='text'>
              {animeData.score}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Scored by: </h3>
            </div>
            <div className='text'>
              {animeData.scored_by}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Rank: </h3>
            </div>
            <div className='text'>
              {animeData.rank}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Popularity: </h3>
            </div>
            <div className='text'>
              {animeData.popularity}
            </div>
            </div>
          </div>

          <div className='infoSec'>
            <div className='header-info'>
              <h3>Members: </h3>
            </div>
            <div className='text'>
              {animeData.members}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Favorites: </h3>
            </div>
            <div className='text'>
              {animeData.favorites}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Background: </h3>
            </div>
            <div className='text'>
              {animeData.background}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Season: </h3>
            </div>
            <div className='text'>
              {animeData.season}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Year: </h3>
            </div>
            <div className='text'>
              {animeData.year}
            </div>
            </div>

            <div className='infoSec'>
            <div className='header-info'>
              <h3>Genre: </h3>
            </div>
            <div className='text'>
              {animeData.genres.name}
            </div>
            </div>
        </div>
    
      </div>
      <CommentForm mal_id={mal_id}/>
    </div>
  )
}

export default AnimePage
