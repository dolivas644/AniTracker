import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const MyAnimeList = () => {
const {user} = useAuth0();
/* make a get request for items in saved list
fetch url ${user.sub}
setLts(list)

useEffect for authentication
*/
const getSavedList = async () => {
  //grab user info from auth0 id & sub
  const userInfo = {
    sub: user.sub,
  }
  console.log(userInfo);

  const response = await fetch(`/myanimelist?sub=${user.sub}`)
   
  const content = await response.json();
  console.log(content, "user content")
}
   
  return (
    <div>
        {/* map items in list  */}
      
    </div>
  )
}

export default MyAnimeList
