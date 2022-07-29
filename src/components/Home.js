import React,{ useEffect } from 'react';
import Menu from './Menu';
import ImgSlider from './ImgSlider';
import Cards from './Cards';
import Recommends from './Recommends';
import Trending from './Trending';
import NewDisney from './NewDisney';
import DisneyOrg from './DisneyOrg';
import { useDispatch,useSelector } from 'react-redux';
import db  from '../firebase';
import {setMovies} from '../features/movie/movieSlice';
import {selectUserName } from '../features/user/userSlice';
import {collection,getDocs} from 'firebase/firestore/lite';

export default function Home() {
    
  const dispatch=useDispatch();
  const username=useSelector(selectUserName);
  let recommendArr=[];
  let newDisneyArr=[];
  let originalsArr=[];
  let trendingArr=[];

  const setmve=()=>{
    dispatch(setMovies({
    recommended:recommendArr,
    trending:trendingArr,
    originals:originalsArr,
    newDisney:newDisneyArr
  }))
  }
  useEffect(()=>{
    // const moviesCol = collection(db, 'movies');
    // const movieSnapshot = getDocs(moviesCol);
    // movieSnapshot.docs.map(doc => doc.data());
    const getCollectionData=async()=>{
      const collectionData=await getDocs(collection(db, 'movies'));
      // console.log(collectionData);
      collectionData.docs.map((doc) => {
        // console.log(doc.data());
          switch (doc.data().type) {
            case 'recommend':
                recommendArr=[...recommendArr,{id:doc.id,...doc.data()}]
                //console.log(recommendArr);
                //recommended.push(doc.data())   
                break;
            case 'trending':
                trendingArr=[...trendingArr,{id:doc.id,...doc.data()}]
                break;
            case 'original':
                originalsArr=[...originalsArr,{id:doc.id,...doc.data()}]
                break;
            case 'new':
                newDisneyArr=[...newDisneyArr,{id:doc.id,...doc.data()}]
                break;
          }
      })
      setmve();
    }
    getCollectionData();
    
  },[username])
  
  return (
    <div className='d-flex flex-column'>
        <Menu />
        <div style={{width:'90%',margin:'auto'}} className='d-flex justify-content-center'>
          <ImgSlider />
        </div>
        <div style={{width:'90%',margin:'auto'}} className='mt-5'>
          <Cards />
        </div>
        <div style={{width:'90%',margin:'auto'}} className="mt-5">
          <h4 className='fw-bolder'>Recommended for you</h4>
          <Recommends />
        </div>
        <div style={{width:'90%',margin:'auto'}} className="mt-5">
          <h4 className='fw-bolder'>Trending</h4>
          <Trending />
        </div>
        <div style={{width:'90%',margin:'auto'}} className="mt-5">
          <h4 className='fw-bolder'>New in Disney+</h4>
          <NewDisney/>
        </div>
        <div style={{width:'90%',margin:'auto'}} className="mt-5">
          <h4 className='fw-bolder'>Disney+Originals</h4>
          <DisneyOrg />
        </div>
        <img
        src={require("../images/home-background.png")}
        style={{
          overflow: "hidden",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: -1,
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  )
}
