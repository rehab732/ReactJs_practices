import React, { useMemo, useState } from "react";
const Contacts = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  function changeCount1() {
    // return count1+1;
    setCount1(count1 + 1);
  }
  function changeCount2() {
    // return count2+1;
    setCount2(count2 + 1);
  }

  // function detecectEvencounter2() {
  //   return count2 % 2 == 0;
  // }

  //using useMemo
  let count2Memo=useMemo(()=>{
    return count2 % 2 === 0;
  },[count2])

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <h2>Counter 1</h2>
          <h3>{count1}</h3>
          <button className="btn btn-danger" onClick={changeCount1}>
            Change Counter 1
          </button>
        </div>
        <div className="col-md-6">
          <h2>Counter 2</h2>
          <h3>{count2}</h3>

          <h1>Even Or Odd :{count2Memo ? 'Even':'Odd'} </h1>
          <button className="btn btn-danger" onClick={changeCount2}>
            Change Counter 2
          </button>
        </div>
      </div>
    </>
  );
};

export default Contacts;
