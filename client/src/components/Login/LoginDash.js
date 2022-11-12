import React from 'react'
import NavBar from '../../auth/nav-bar'
import './LoginDash.css';
import Logo from '../../dash/Logo.png'
import HeadImg from '../Images/Head.png'
import ListImg from '../Images/ListImg.png'
import AniList from './Images/AniList.png'
import AniSearch from './Images/AniSearch.png'
import { useState, useEffect } from 'react';
const LoginDash = () => {

const [theme, setTheme]=useState('light');

const toggleTheme = () => {
    if (theme === 'light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }
}
useEffect(() =>{
    document.body.className = theme;
}, [theme])
          
    return (
        <div>

            <div className='main'>
                <button className='button-17' onClick={toggleTheme}>Light/Dark</button>
                <h1> Use the Log In button to get full access</h1>
                <img className="HeadImg" src={HeadImg} alt="First slide"></img>
                
                <img className="AniImg" src={AniSearch} alt="First slide"></img>
                <img className="HeadImg" src={ListImg} alt="First slide"></img>
                <br></br>
                <img className="AniListImg" src={AniList} alt="First slide"></img>
                

               
            </div>
        </div>
    )
}

export default LoginDash