import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './MyList.css';
import CompletedList from './CompletedList';

const MyAnimeList = () => {
  const { user } = useAuth0();
  const [list, setList] = useState([])

  //currently watch list complete=false
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

  //users wants to remove list item based on id (row)
  const deleteItem = async (handleDeleteAnime) => {
    const response = await fetch(`/myanimelist/${handleDeleteAnime}`, {
      method: 'DELETE',
    });
    await response.json();
    const deleteItemFun = list.filter((anime) => anime.list_id !== handleDeleteAnime);
    setList(deleteItemFun);
  }

  const completedItem = async (list_id) => {
    const completion = {
      complete: true
    }
    const response = await fetch(`/myanimelist/${list_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ completion })
    });
    const content = await response.json();
    console.log(content, "update false to true")
  }
//add completed list? tried and didnt change
  useEffect(() => {
    getSavedList()
  }
    , [])


  return (
    <div className='box'>
      <div className='column'>
        <h1>Currently Watching</h1>
        <div className='card-myList'>
          {list.map((anime) => {
            return (
              <>
                <div className='card-list'>
                  <h5>{anime.title}</h5>
                  <img className='cardListImg' src={anime.image}></img>
                  <br></br>
                  <button className='button-delete' onClick={() => deleteItem(anime.list_id)}>Remove from List</button>
                  <button className='button-delete' onClick={() => completedItem(anime.list_id)} >Mark Completed</button>
                </div>
              </>

            )
          })}
        </div>
      </div>
      <div className='column'>
        <h1>Completed</h1>
        <CompletedList />
      </div>


    </div>
  )
}

export default MyAnimeList
