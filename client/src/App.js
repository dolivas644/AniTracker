import './App.css';
import Dashboard from './dash/Dashboard';
import React from 'react'
import NavBar from './auth/nav-bar';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './auth/loading';
// import {Route, Routes, Link } from 'react-router-dom';
import LoginDash from './components/Login/LoginDash';
import Home from './components/Home/Home';
import TopRanks from './components/Ranks/TopRanks';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfo from './components/User/UserInfo';
import HomeNav from './components/Nav/HomeNav';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Schedule from './components/Schedule/Schedule';
import MyAnimeList from './components/Mylist/MyAnimeList';
import AnimePage from './components/Home/AnimePage';
function App() {

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

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
    <NavBar />
    <button className='button-17' onClick={toggleTheme}>Light/Dark</button>
    <div className="NavBar">
      {!user ? "":
        <Router>
          <HomeNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/TopRanks' element={<TopRanks />}></Route>
            <Route path='/Schedule' element={<Schedule/>}></Route>
            <Route path='/MyAnimeList' element={<MyAnimeList/>}></Route>
            <Route path='/UserInfo' element={<UserInfo user={user}/>}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/AnimePage/:mal_id' element={<AnimePage />}></Route>

          </Routes>
        </Router> }
      </div>
    <div className="container flex-grow-1">
    {!user ? <LoginDash/> : <Dashboard /> }

    </div>
    <Footer/>
  </div>
  );
}

export default App;
