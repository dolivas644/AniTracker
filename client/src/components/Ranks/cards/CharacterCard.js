import React from 'react'

const CharacterCard = ({ topCharacter }) => {
    return (
        <div>
            <h3>Top Characters</h3>
            {topCharacter.map(character => (
                <>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Name : {character.name}</h2>
                                <img className='imgCard-0' src={character.images.jpg.image_url} alt="icon"></img>
                            </div>
                            <div class="flip-card-back">
                                <a
                                    href={character.url}
                                    target="_blank"
                                    key={character.mal_id}
                                    rel="noreferrer">
                                    {character.name_kanji}
                                </a>
                                <p>{character.name_kanji}</p>
                                <p>Nickname: {character.nicknames}</p>
                                <p>Favorites: {character.fvaorites}</p>
                                <p>About: {character.about}</p>

                            </div>
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}

export default CharacterCard
