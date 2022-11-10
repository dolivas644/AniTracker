import React from 'react'
import NavBar from '../../auth/nav-bar'
import './LoginDash.css';
import Logo from '../../dash/Logo.png'
import HeadImg from '../Images/Head.png'
import ListImg from '../Images/ListImg.png'

const LoginDash = () => {
    return (
        <div>

            <div className='main'>
                <img className="HeadImg" src={HeadImg} alt="First slide"></img>
                <h1> Use the Log In button to get full access</h1>

               
            </div>
        </div>
    )
}

export default LoginDash