import './App.css';
import Dashboard from './dash/Dashboard';
import React from 'react'
import NavBar from './auth/nav-bar';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './auth/loading';
import {Route, Routes, Link } from 'react-router-dom';

function App() {

  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
    <NavBar />
    <div className="container flex-grow-1">
    {!user ? <span>Hello from Techtonica</span> : <Dashboard /> }

    </div>
  </div>
  );
}

export default App;
