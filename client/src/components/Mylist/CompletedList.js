import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './MyList.css';
import { useState, useEffect } from 'react';

const CompletedList = () => {
    const { user } = useAuth0();
    const [list, setList] = useState([])

    //completed watch list compelte=true
const getCompleteList = async () => {
    //grab user info from auth0 id & sub
    const userInfo = {
      sub: user.sub,
    }
    console.log(userInfo);
  
    const response = await fetch(`/completedList?sub=${user.sub}`)
  
    const content = await response.json();
    setList(content);
    console.log(content, "user content")
  }
  useEffect(() => {
   getCompleteList()
  }, [])

  return (
    <div>
      <div className='card-myList'>
          {list.map((anime) => {
            return (
              <>
                <div className='card-list'>
                  <h5>{anime.title}</h5>
                  <img className='cardListImg' src={anime.image}></img>
                
                </div>
              </>

            )
          })}
        </div>
    </div>
  )
}

export default CompletedList
