import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MediaItem from '../MediaItem/MediaItem';
const Home = () => {

  const [trendingMovies,setTrendingMovies]=useState([]);
  const [trendingTv,setTrendingTv]=useState([]);
  const [trendingPeople,setTrendingPeople]=useState([]);


;

async function getTreanding(type,callback)
  {
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=358468a6320ef5fd87213fe790a3ce2a`);
    callback(data.results);
    console.log(data.results)
  }
  useEffect(()=>{
    getTreanding("movie",setTrendingMovies);
    getTreanding("tv",setTrendingTv);
    getTreanding("person",setTrendingPeople);

  },[])

  return (
    <>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
        <div>
        <div className="bor w-25 mb-3"></div>
          <h2 className='h5'>Trending Movies</h2>
          <br/>
          <h2 className='h5'>To Watch Right Now</h2>
          <p className='py-2 text-muted'>Watched Movies To Watch Right Now</p>
          <div className="bor w-100 mt-3"></div>
        </div>
        </div>
        {trendingMovies.slice(0,10).map((item,index)=> <MediaItem key={index} item={item}/>)}
        </div>     


        <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
        <div>
        <div className="bor w-25 mb-3"></div>
          <h2 className='h5'>Trending Tv</h2>
          <br/>
          <h2 className='h5'>To Watch Right Now</h2>
          <p className='py-2 text-muted'>Watched Movies To Watch Right Now</p>
          <div className="bor w-100 mt-3"></div>
        </div>
        </div>
        {trendingTv.slice(0,10).map((item,index)=> <MediaItem key={index} item={item}/>)}
        </div>   


        
        <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
        <div>
        <div className="bor w-25 mb-3"></div>
          <h2 className='h5'>Trending People</h2>
          <br/>
          <h2 className='h5'>To Watch Right Now</h2>
          <p className='py-2 text-muted'>Watched Movies To Watch Right Now</p>
          <div className="bor w-100 mt-3"></div>
        </div>
        </div>
        {trendingPeople.slice(0,10).map((item,index)=> <MediaItem key={index} item={item}/>)}
        </div>     

    </>
  );
}

export default Home;
