import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const MyAnimeList = () => {
const {user} = useAuth0();
/* make a get request for items in saved list
fetch url ${user.sub}
setLts(list)

useEffect for authentication
*/

const [list, setList] =useState([])

const getSavedList = async () => {
  //grab user info from auth0 id & sub
  const userInfo = {
    sub: user.sub,
  }
  console.log(userInfo);

  const response = await fetch(`/myanimelist?sub=${user.sub}`)
   
  const content = await response.json();
  setList(content);
  console.log(content, "user content")
}
   
  return (
    <div>
       <h1>My List</h1>
       <div className='card'>
        {list.map((anime, index)=>{
          return(
            <>
            <h2>Title:</h2> 
            <img src={anime.image}></img>
            </>
            
          )
        })}
       </div>
      
    </div>
  )
}

export default MyAnimeList
