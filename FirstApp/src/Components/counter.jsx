
// import {useState} from 'react';
const Counter = (props) => {
  console.log(props)
  // let count = 0;

//states
  // const [count,setCount]=useState(1);
  // const names=["Rehab","Mahmoud","Mohamed"];
//helpers
  // const handelClick = () => {
  //   // count++;
  //   setCount(count+1);
  // };

  const getColor = () => {
    // if(count===1)
    // return 'bg-red-700';
    // else
    // return 'bg-amber-500';
    // eslint-disable-next-line react/prop-types
    return props.counter.counter===3?'bg-red-700':'bg-amber-500';
  }


//UI
  return (
    <>
      {/* <ul>
        {names.map((item,index) =>(
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    <div>
      <span className={`mr-5 ${getColor()}`}>{props.counter.counter}</span>
      <button 
      onClick={()=>props.handel(props.counter.id)}//to call fun take arg        ()=>funname(arg)
       className="btn bg-blue-500 rounded-full">
        +
        </button>
    </div>
    </>
  );
};

export default Counter;
