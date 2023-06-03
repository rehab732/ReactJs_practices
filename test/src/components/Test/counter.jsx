import React, { useEffect, useState } from 'react';
const Counter = ({getCount}) => {

   const [count, setCount] = useState(0);
   useEffect(()=>{
    setCount(getCount)
   },[getCount])
  return (
    <>
      <h1> Counter Child :{count}</h1>
    </>
  );
}

export default Counter;
