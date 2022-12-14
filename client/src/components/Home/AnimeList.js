import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import AnimePage from './AnimePage';
import {Link} from "react-router-dom";

export const AnimeList = ({ animelist, setAnimeInfo }) => {
  const { user } = useAuth0();

  const addToList = async (anime_id, title, image) => {
    //grab user info from auth0 id & sub
    const userInfo = {
      sub: user.sub,
      //pass as an argument
      anime_id: anime_id
    }
    const animeInfo={
      anime_id: anime_id,
      title: title,
      image:image
    }
    console.log(userInfo);
    console.log(animeInfo);
//grabs both userInfo and animeInfo
    const userAnimeInfo = {user:userInfo, anime:animeInfo};
    console.log(userAnimeInfo)

    const response = await fetch('/myanimelist', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userAnimeInfo)
    });
    const content = await response.json();
    console.log(content, "user content")
    // alert('Anime was added to your list');
  }
  return (
    <>
    <div className='mapCard'>
      {
        animelist ? (
          
          animelist.map((anime, index) => {
            return (
              <div className="card" key={index} >
                <img className='anime-img' src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  <div className="overlay">
                  <Link className='button' to={`/AnimePage/${anime.mal_id}`}>Get Anime Info</Link>
                    <h4>{anime.title_japanese}</h4>
                    <h3>SYNOPSIS</h3> 
                     <div className="synopsis">
                      <p>{anime.synopsis}</p>
                    </div>
                    <button className='button-add'onClick={() => addToList(anime.mal_id, anime.title, anime.images.jpg.large_image_url)}>Add Anime to list</button>
                  </div>

                </div>
              </div>
            )
          })
          
        ) : <div className='randomBox'>
          <h2>You anime is NOT found. You can choose a random one</h2>
        </div>

      }
</div>
    </>
  )
}

export default AnimeList
