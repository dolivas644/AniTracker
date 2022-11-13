import React from 'react'
import { useState, useEffect } from 'react';
import ScheduleCard from './ScheduleCard';

const Schedules = () => {

    const [season, setSeason]=useState([]);

    const getSeasonNow=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/schedules/monday`)
        const resData =await res.json();
    
        setSeason(resData.data);
    }
    useEffect(()=>{
      getSeasonNow()
    },[])

  return (
    <div>
      <ScheduleCard season={season}/>   
</div>
      
  )
}

export default Schedules