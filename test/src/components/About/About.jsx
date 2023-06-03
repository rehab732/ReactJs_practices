
import React, { useEffect, useRef, useState } from 'react';
const About = () => {
  const [count,setCount]=useState(0);

  let ref=useRef();
  useEffect(()=>{ref.current.focus()})
  // useEffect(()=>{ref.current=ref.current+1})

  return (
    <>
<h1>Counter : {count}</h1>
<button className='btn btn-info' onClick={()=>setCount(count+1)}> Change</button>
<input type='text' ref={ref}/>
    </>
  );
}

export default About;
