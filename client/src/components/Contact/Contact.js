import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8ywc1rk', 'template_ka7ilwm', e.target, 'lqwVfpz-rZFrSOO8B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div>
            <div className='left'>
                <div className='con'>
                    <h1 className='contactUs'>Contact Us</h1>
                    <p>Need to get in touch with us?
                        Are any of the following issues a concern?
                        <br></br>
                        <h2>API</h2>
                        AnimeTracker uses JikanAPI, unofficial MyAnimeListAPI.
                        <br></br>
                        Informationprovided to retrieve latest information on the "most active online anime + mana community and database".
                        <br></br>
                        All information regarding the API can be found on the <a href='https://jikan.moe/'>Jikan website</a>.
                        <br></br>
                        Bug Reports & Technical Errors
                        <br></br>
                        To report bugs, please use our Support Forum. Before creating a new topic, please read the Support Board Rules thread for more information on how to report problems. This includes, for example:
                        <br></br>
                        <h2>Anime/Manga List problems</h2>
                        <br></br>
                        Image upload errors
                        <br></br>
                        Display problems
                        <br></br>
                        Statistics errors
                        <br></br>
                        HTML 500/400/XXX errors
                        <br></br>
                        Abuse Reports (Users, Images, Posts, etc.)
                        <br></br>
                        Database Problems (Anime, Manga, etc.).

                    </p>
                </div>

            </div>
            <div className='container'>
                <br></br>
                <h2>Fill out this form to report any issues you may be experiencing</h2>
                <form onSubmit={sendEmail}>
                    <div className='col-8 form-group mx-auto'>
                        <input type="text"
                            className='form-control'
                            placeholder='Name'
                            name='name' />
                    </div>
                    <br></br>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type="email"
                            className='form-control'
                            placeholder='Email address'
                            name='email'
                            required />
                    </div>
                    <br></br>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type="text"
                            className='form-control'
                            placeholder='Subject'
                            name='subject'
                            required />
                    </div>
                    <br></br>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <textarea type="text"
                            className='form-control'
                            placeholder='Message'
                            name='message'
                            required></textarea>
                    </div>
                    <br></br>
                    <div className='col-8 pt-3 mx-auto'>
                        <input type="submit" className='btn' value='Send Message'></input>
                    </div>
                </form>

            </div>

        </div>
    )
};
