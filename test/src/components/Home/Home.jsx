import { useState } from "react";

export default function Home()
{
const [count,setCount] = useState(0);

function changeCount()
{
  setCount(Math.random());
}

  return <>
   <h1>Home Component </h1>
  <h3>Counter fron rfc : {count}</h3>
  <button className="btn btn-danger" onClick={changeCount}>change</button>
  </>
  
}
