import React from 'react'

const MangaCard = ({ topManga }) => {

    return (
        <div>
            <h3>Top Manga</h3>
            {topManga.map(manga => (
                <>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Ranking : {manga.rank}</h2>
                                <img className='imgCard-0' src={manga.images.jpg.image_url} alt="icon"></img>
                            </div>
                            <div class="flip-card-back">
                                <a
                                    href={manga.url}
                                    target="_blank"
                                    key={manga.mal_id}
                                    rel="noreferrer">
                                    {manga.title}
                                </a>
                                <p>{manga.title_japanese}</p>
                                <p>Chapters: {manga.chapters}</p>
                                <p>Volumes: {manga.volumes}</p>
                                <p>Status: {manga.status}</p>
                                <p>Synopsis: {manga.synopsis}</p>
                                
                            </div>
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}

export default MangaCard
