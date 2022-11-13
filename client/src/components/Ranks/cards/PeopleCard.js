import React from 'react'

const PeopleCard = ({ topPeople }) => {
    return (
        <div>
            <h3>Top People</h3>
            {topPeople.map(people => (
                <>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Name : {people.name}</h2>
                                <img className='imgCard-0' src={people.images.jpg.image_url} alt="icon"></img>
                            </div>
                            <div class="flip-card-back">
                                <a
                                    href={people.url}
                                    target="_blank"
                                    key={people.mal_id}
                                    rel="noreferrer">
                                    {people.alternate_names}
                                </a>
                                <p>{people.name}</p>
                                <p>Birthday: {people.birthday}</p>
                                <p>Favorites: {people.favorites}</p>
                                <p>About: {people.about}</p>
                            </div>
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}


export default PeopleCard
