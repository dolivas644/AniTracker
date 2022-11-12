import React from 'react'
import NavBar from '../../auth/nav-bar'
import './LoginDash.css';
import Logo from '../../dash/Logo.png'
import HeadImg from '../Images/Head.png'
import ListImg from '../Images/ListImg.png'
import AniList from './Images/AniList.png'
import AniSearch from './Images/AniSearch.png'
import Footer from '../Footer/Footer';

const LoginDash = () => {

    return (
        <div>

            <div className='main'>
                <h1> Use the Log In button to get full access</h1>
                <img className="HeadImg" src={HeadImg} alt="First slide"></img>
                
                <img className="AniImg" src={AniSearch} alt="First slide"></img>
                {/* <img className="HeadImg" src={ListImg} alt="First slide"></img>
                <br></br>
                <img className="AniListImg" src={AniList} alt="First slide"></img> */}
             
            </div>
        </div>
    )
}

export default LoginDash