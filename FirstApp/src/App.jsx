import Counter from "./Components/counter"
import {useState} from 'react';
const App = () => {

  const [counters,setCounters]=useState([
    {id:1,counter:2},
    {id:2,counter:3},
    {id:3,counter:7},
    {id:4,counter:5}
  ]);

const handelIncrement = (id) => {

  //1. clone
  const newCounters = [...counters]
  // console.log(id);
  const index=counters.findIndex(i=>i.id===id);//get index of all element
  const newCounter=[...counters[index]]
  counters[index]+=3
  // console.log(index)

  
}

  return (
    <>
  {counters.map((counter)=>(
    <Counter
     key={counter.id} 
     counter={counter}
     handel={handelIncrement}
      />
  ))}
  
    </>
  );
}

export default App;
