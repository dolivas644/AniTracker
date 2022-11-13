import React from 'react'

const ReviewCard = ({ topReview }) => {
    return (
        <div className='mapCard'>
            <h3>Top Reviews</h3>
            {topReview.map(review => (
                <>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h2>Username : {review.data.user.username}</h2>
                                <img className='imgCard-0' src={review.data.user.images.jpg.image_url} alt="icon"></img>
                            </div>
                            <div class="flip-card-back">
                                <a
                                    href={review.data.user.url}
                                    target="_blank"
                                    key={review.data.mal_id}
                                    rel="noreferrer">
                                    {review.data.anime.title}
                                </a>
                                <p>{review.data.anime.url}</p>
                                <p>Type: {review.data.type}</p>
                                <p>Date: {review.data.date}</p>
                                <p>Votes: {review.data.votes}</p>
                                <p>Review: {review.data.review}</p>
                            </div>
                        </div>
                    </div>
                </>

            ))}
        </div>
    )
}

export default ReviewCard
