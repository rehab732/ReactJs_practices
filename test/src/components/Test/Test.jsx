import React, { useCallback, useState } from "react";
import Counter from "./counter";
const Test = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ra7obba");
    const getCounter=useCallback(()=>{
      return count;
    },[count])
    
  return (
    <>
      <input
       className="form-control"
        type="number"
         value={count}
         onChange={e=>setCount(e.target.value)}
         />
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button className="btn btn-danger" onClick={()=>setName('7odaaaa')}>Name</button>

      <Counter getCount={getCounter}/>
    </>
  );
};

export default Test;
