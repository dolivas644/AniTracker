import React from 'react'

const AnimeCard = ({ topAnime }) => {
    return (
        <div>
            <h3>Top Anime</h3>
            {topAnime.map(anime => (
                <>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Ranking : {anime.rank}</h2>
                                <img className='img' src={anime.images.jpg.image_url} alt="icon"></img>
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
