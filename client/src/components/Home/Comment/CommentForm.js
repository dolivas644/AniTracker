import React from 'react'
import './Comment.css'
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CommentBox from './CommentBox';
import './box.css';

const CommentForm = ({ mal_id }) => {
    const { user } = useAuth0();

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
            <CommentBox mal_id={mal_id} />
            <div className='mapComments'>
                {comment.map(comment => {
                    return (
                        <>
                            <div className='comment'>
                                <div className='user-info-comment'>
                                <img className='comment-img' src={comment.picture}></img>
                                    <p>{comment.name}</p>
                                </div>
                                <div className='comment-text'>
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
