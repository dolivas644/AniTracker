import React from 'react'
import './dashboard.css';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './Logo.png';

const Dashboard = () => {
    const {
        loginWithRedirect,
        logout,
        user,
        isAuthenticated
    } = useAuth0();

    return (
        <div>
            
            <div className='container'>
                <div className='left'>
                    <h1>WELCOME TO </h1>
                    <img src={Logo} alt='logoIcon'></img>
                    <br></br>
                    <h2>EXPLORE NEW TITLES WITH OUR SEARCH FEATURE</h2>
                    <h2>FIND THE HOTTEST
                        <br></br>
                        - ANIME
                        <br></br>
                        - MANGA
                        <br></br>
                        - CHARACTERS
                        <br></br>
                        - PEOPLE
                        <br></br>
                        - REVIEWS
                    </h2>
                    <h3>JOIN OUR SITE TO STAY UPDATED WITH THE LATEST ANIME</h3>
                </div>
                <div className='right'>
                    <ul>
                        <li><button onClick={loginWithRedirect}>Login with redirect</button></li>
                        <li><button onClick={logout}>Logout</button></li>
                    </ul>
                    <h3>User is {isAuthenticated ? "logged in" : "Not logged in"}</h3>
                    {isAuthenticated && (
                        <pre style={{ textAlign: 'start' }}>
                            {JSON.stringify(user, null, 2)}
                        </pre>)}
                </div>
            </div>


        </div>
    )
}

export default Dashboard
