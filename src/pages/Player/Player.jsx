import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useNavigate, useParams } from 'react-router-dom'



const Player = () => {

  const{id} = useParams();
  const navigate = useNavigate();

cinst [apiData, setApiData] = useState({
  name:"",
  key:"",
  published_at:"",
  typeof:"",

})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTc4NmViNjllMzk0ZDg3MDQ4OTk3YzZhYzc2NDE2MiIsIm5iZiI6MTcyMTI0NDQ5NS4xOTEyMiwic3ViIjoiNjY5ODE5NDBkMmM3NTZmOGVjN2ZmMTY1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mK3GaiDa8qDT9Muy06uc0B3b62xnTWyrEBwaBSrK5Ow'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  

    return (
        <div className='player'>
       <img src= {back_arrow_icon} alt= "" onAbort={()=>{navigate(-2)}}/>
       <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`}
       title='trailer' frameBorder='0' allowFullScreen ></iframe>
       <div className="player-info">
       <p> {apiData.publishet_at.slice(0,10)}</p>
        <p> {apiData.name}</p>
         <p> {apiData.type} </p>
       </div>
        </div>
        )
}
export default Player