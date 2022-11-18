import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';

const CommentBox = ({ mal_id }) => {
    const { user } = useAuth0();
    const [text, setText] = ('');

    const addComment = async (Text) => {
        const commentInfo = {
            Text: Text,
            anime: { anime_id: mal_id },
            user: { sub: user.sub }
        }
        const userFormInfo = { comment: commentInfo };
        console.log(userFormInfo)

        const response = await fetch(`/comments`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userFormInfo)
        });
        const content = await response.json();
        console.log(content, "user content")
        setText('');
    }

    return (
        <div>
            <div className='commentSection'>
                <div className='top-bar'>
                    <h2>Comments:</h2></div>
                <form>
                    <label>Enter your comment:
                        <input type="text" value={text} onChange={((e) => setText(e.target.value))} />
                    </label>
                    <input type="submit" value="Submit" onClick={(() => addComment(mal_id))}></input>
                </form>
            </div>

        </div>
    )
}

export default CommentBox
