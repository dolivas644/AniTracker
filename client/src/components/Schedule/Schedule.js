import React from 'react'
import { useState, useEffect } from 'react';
import ScheduleCard from './ScheduleCard';

const Schedules = () => {

    const [season, setSeason]=useState([]);
    const [day, setDay]=useState('monday')
    const getSchedule=async()=>{
        const res =await fetch(`https://api.jikan.moe/v4/schedules/${day}`)
        const resData =await res.json();
    
        setSeason(resData.data);
    }
    useEffect(()=>{
      getSchedule()
    },[day])

    const [value, setValue] = useState();

    const handleChange = (e) =>{
        setValue(e.target.value);
        setDay(e.target.value)
    }
  return (
    <div>
        <h1>Currently Airing Anime</h1>
        <div>
            <label for="day">Choose the DAY </label>
            <select name="day" id='day' onChange={handleChange}>
                <option value='monday'  >Monday</option>
                <option value='tuesday'  >Tuesday</option>
                <option value='wednesday'>Wednesday</option>
                <option value='thursday'>Thursday</option>
                <option value='friday'>Friday</option>
                <option value='other'>other</option>
                <option value='unknown'>unknown</option>
            </select>
            <br></br>
            {/* <input type="submit" value="submit" onClick={getSchedule()}></input> */}
        </div>
      <ScheduleCard season={season}/>   
</div>
      
  )
}

export default Schedules