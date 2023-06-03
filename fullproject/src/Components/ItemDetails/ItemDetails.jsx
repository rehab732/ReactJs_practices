import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
let {id,mediatype}=useParams();
const [itemDetails,setItemDetails]=useState({});
async function getItemDetails(id,mediatype)
{
let {data}=await axios.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=358468a6320ef5fd87213fe790a3ce2a`);
setItemDetails(data);
}

useEffect(()=>{
  getItemDetails(id,mediatype);
},[]);

  return (
    <>
     <div className="row">
      <div className="col-md-3">
        <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+itemDetails.poster_path} alt=''/>
      </div>
<div className="col-md-9">
  <h2>{itemDetails.title} {itemDetails.name}</h2>
  <p className='py-2 text-muted'>{itemDetails.overview}</p>
</div>

      </div> 
    </>
        );
}

export default ItemDetails;
