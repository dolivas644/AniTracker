import React from 'react'
import './Comment.css'
import { useState } from 'react';

const CommentForm = () => {
const [comment, setComment] = useState('');

  return (
    <div>
        <div className='commentSection'>
            <div className='top-bar'>
                <h2>Comments:</h2></div>
                <form>
                    <label>Enter your comment:
                    <input type="text" comment="comment"/>
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>
        </div>
      <div className='mapComments'>

      </div>
    </div>
  )
}

export default CommentForm
