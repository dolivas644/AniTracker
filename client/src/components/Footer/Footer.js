import React from 'react'
import './Footer.css'
const Footer = () => {

    return (
        <div>
            <footer>
                <div className='container'>
                    <div className='text'>
                        <h5>AnimeTracker</h5>
                        <p>A full-stack application created as a final project during Techtonica bootcamp.
                            Goal is for users to use the Jikan API to access the anime database. Doing so,
                            allows users to search for anime and add them to their own watchlist.
                        </p>
                    </div>
                    
                    <div className='SocialMedia'>
                        <a href="https://www.linkedin.com/in/diana-olivas"><img
                            src="https://img.icons8.com/nolan/64/linkedin-circled.png" /></a>
                        <a href="https://github.com/dolivas644"><img src="https://img.icons8.com/nolan/64/github.png" /></a>
                    </div>
                    
                    <div className='Copyright'>
                        @ 2022 Copyright: Diana Olivas
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
