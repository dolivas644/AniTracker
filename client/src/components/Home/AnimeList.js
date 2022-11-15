import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const AnimeList = ({ animelist, setAnimeInfo }) => {
  const { user } = useAuth0();
  /* make a post request 
  add to list 
  setList(...list, anime)
  grab user info id & sub 

  make POST to backend route
  get response

  onClick call request
  */
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
    alert('Anime was added to your list');
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
                  <br></br>
                  <br></br>
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
          
        ) : "Not Found"
      }
</div>
    </>
  )
}

export default AnimeList
