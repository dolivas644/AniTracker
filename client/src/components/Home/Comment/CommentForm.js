import React from 'react'
import './Comment.css'
import { useState, useEffect } from 'react';

const CommentForm = ({ mal_id }) => {

    const [comment, setComment] = useState('');

    const getComments = async () => {

        const response = await fetch(`/comments?anime_id=${mal_id}`)
        const content = await response.json();
        setComment(content);
    }

    useEffect(() => {
        getComments()
    }, [mal_id])
    if (!comment) {
        return 'loading comments . . .'
    }
    return (
        <div>
            <div className='commentSection'>
                <div className='top-bar'>
                    <h2>Comments:</h2></div>
                <form>
                    <label>Enter your comment:
                        <input type="text" comment="comment" />
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            <div className='mapComments'>
                {comment.map(comment => {
                    return (
                        <>
                        <div className='comment'>
                        <div className='user-info-comment'>
                                <p>{comment.name}</p>
                                <img src={comment.picture}></img>
                            </div>
                            <div>
                            <p>{comment.Text}</p>
                            </div>

                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default CommentForm
