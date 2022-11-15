import React, { useState , useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './MyList.css';

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

  const response = await fetch(`/animeList?sub=${user.sub}`)
   
  const content = await response.json();
  setList(content);
  console.log(content, "user content")
}
   
useEffect(()=>{
  getSavedList()
}
,[])


  return (
    <div>
       <h1>My List</h1>
       <div className='card-myList'>
        {list.map((anime)=>{
          return(
            <>
            <div className='card-list'>
            <h5>{anime.title}</h5> 
            <img className='cardListImg' src={anime.image}></img>
            <br></br>
            <button className='button-delete'>Remove from List</button>
            <button className='button-delete'>Completed</button>
            </div>
            </>
            
          )
        })}
       </div>
      
    </div>
  )
}

export default MyAnimeList
