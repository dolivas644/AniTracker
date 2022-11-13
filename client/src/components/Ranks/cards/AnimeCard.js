import React from 'react'
import './cards.css'
const AnimeCard = ({ topAnime }) => {
    return (
        <div className='mapCard'>
        
            {topAnime.map(anime => (
                <>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Ranking : {anime.rank}</h2>
                                <img className='imgCard-0' src={anime.images.jpg.image_url} alt="icon"></img>
                            </div>
                            <div class="flip-card-back">
                                <a
                                    href={anime.url}
                                    target="_blank"
                                    key={anime.mal_id}
                                    rel="noreferrer">
                                    {anime.title}
                                </a>
                                <p>{anime.title_japanese}</p>
                                <p>Rating: {anime.rating}</p>
                                <p>Season: {anime.season}</p>
                                <p>Year: {anime.year}</p>
                                <p>Episodes: {anime.episodes}</p>
                                <p>Duration: {anime.duration}</p>
                            </div>
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}

export default AnimeCard
