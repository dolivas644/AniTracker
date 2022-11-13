import React from 'react'
import { Link } from 'react-router-dom'
import './HomeNav.css'
const HomeNav = () => {
  return (
    <div>
       <>
            <div className="navbar">
                <ul>
                <li><Link to="/">Home</Link></li>

                <li><Link to="/TopRanks">Top Rankings</Link></li>

                <li><Link to="/Schedule">Schedule</Link></li>
                
                <li><Link to="/UserInfo">User Info</Link></li>
                
                <li><Link to="/Contact">Contact</Link></li>
                </ul>
                
            </div>
        </>
    </div>
  )
}

export default HomeNav
