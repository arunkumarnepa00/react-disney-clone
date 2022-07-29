import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import db from '../firebase';
import {getDoc,doc } from 'firebase/firestore/lite';
import { useParams } from 'react-router-dom';

export default function Movie() {
  const {id}=useParams();
  const [details,setDetails]=useState({});

  useEffect(()=>{
    const getDetails=async()=>{
      const movie=await getDoc(doc(db, 'movies',id));
      console.log(movie.data());
      movie.exists()?setDetails(movie.data()):console.log('error occured in movie fetch');
    }
    getDetails();
  },[id])

  return (
    <div>
      <Menu />
      <div>
      <img src={details.titleImg}
      style={{
        marginTop:'5rem'
      }} width='35%'/>
      <div className='d-flex flex-row align-items-center ms-5 mt-2'>
        <div className='btn btn-lg btn-light d-flex align-items-center me-4'><img src={require('../images/play-icon-black.png')} width='30%'/>PLAY</div>
        <div className='btn btn-lg btn-outline-dark d-flex align-items-center me-3 text-white'><img src={require('../images/play-icon-white.png')} width='30%'/>TRAILER</div>
        <div className='border border-2 border-dark rounded-circle bg-dark me-3' ><img src={require("../images/watchlist-icon.svg").default} width='40px'/></div>
        <div className='border border-2 border-dark rounded-circle bg-dark'><img src={require('../images/group-icon.png')} width='40px'/></div>
      </div>
      <div style={{width:'90%',paddingLeft:'3rem',color:'#f9f9f9'}} className='mt-2' >
      <h3>{details.title}</h3>
      <div>{details.subTitle}</div>
      <div className='mt-2' style={{fontSize:'17px'}}>{details.description}</div>
      </div>
      </div>
      
      
     
  <img 
      src={details.backgroundImg}
      style={{
       overflow: "hidden",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom:0,
        zIndex: -1,
        height: "100%",
        width: "100%",
      }} 
      />
    
    </div>
  )
}
