import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const CommentBox = ({mal_id}) => {
    const {user} = useAuth0();

    const addComment = async(anime_id, Text, ) =>{
        //grab user info from auth0
        const userInfo ={
            sub:user.sub
        }
        const formInfo ={
            anime_id: anime_id,
            Text: Text,
        }
        const userFormInfo = {user:userInfo, form:formInfo};
    console.log(userFormInfo)

        const response = await fetch(`/comments?anime_id=${mal_id}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify(userFormInfo)
          });
          const content = await response.json();
          console.log(content, "user content")
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
      
    </div>
  )
}

export default CommentBox
