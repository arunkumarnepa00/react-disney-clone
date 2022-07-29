import React from 'react';
import './sections.css';
import { useSelector } from 'react-redux';
import { selectRecommended } from '../features/movie/movieSlice';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';

export default function Recommends() {
  

  const movies=useSelector(selectRecommended);
  const navigate=useNavigate();
  // const handleClick=(id)=>{
  //   navigate(`/movie/${id}`);
  // }

  return (
    <div className='d-flex flex-row justify-content-around flex-wrap mt-3'>
     {
      movies && movies.map((movie)=>(
        <div key={movie.id} className="card m-auto movieCard" style={{ width: "16rem", backgroundColor: "#1f2a42",height:"9rem"}} >
            <Link to={'/movie/'+movie.id}><img src={movie.cardImg} className="card-img-top" alt={movie.title}/></Link>
        </div>
      ))
     }
     {/* <div className="card m-auto movieCard" style={{ width: "16rem", backgroundColor: "#1f2a42",height:"9rem"}}>
        <img src={require("../moviewp/moana.jpg")} className="card-img-top" alt="..." />
      </div> */}
      
    </div>
  )
}
