import { useDispatch, useSelector } from "react-redux";
import { decrease, increase,incrementbyamount } from "../Redux/CounterSlice";
const SocialMedia = () => {
  let dispatch=useDispatch()
let{counter,userName}= useSelector((state)=>state.x)
  return (
    <div>
      <h2>Counter:{counter}</h2>
      <h2>Name:{userName}</h2>
<button className="btn btn-info" onClick={()=>dispatch(increase())}>Plus</button>
<button className="btn btn-danger" onClick={()=>dispatch(decrease())}>Minus</button>
<button className="btn btn-danger" onClick={()=>dispatch(incrementbyamount(14))}>Mount</button>


    </div>
  );
}

export default SocialMedia;
