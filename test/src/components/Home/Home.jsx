
import { useContext } from "react";
import useCustom from "../../Hooks/UseCustom";
import { countercontext } from "../Context/CounterStore";
export default function Home() {
  // const [count,setCount] = useState(0);

  // function changeCount()
  // {
  //   setCount(Math.random());
  // }

  // let [trendingmovies, setMovie] = useState([]);

  // async function getTrindingMovies() {
  //   let { data } = await axios.get(
  //     "https://api.themoviedb.org/3/trending/movie/week?api_key=358468a6320ef5fd87213fe790a3ce2a"
  //   );
  //   // console.log(data)//array of 20 object
  //   setMovie(data.results);
  // }

  // useEffect(() => {
  //   getTrindingMovies();
  // }, []);

  let {trendingmovies}=useCustom();
let{countt}=useContext(countercontext)
  return (
    <>
      <div className="row">

        <h1>couter context :{countt}</h1>
        {trendingmovies.length>0? trendingmovies.map((movie, index) => 
          <div key={index} className="col-md-3">
            <div className="movie">
              <img className="w-100" src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} alt=""/>
              <h3>{movie.title}</h3>
              <h3>{movie.id}</h3>
              <p>{movie.overview}</p>

            </div>
          </div>
        ):<i className="fas fa-spinner fa-spin fa-4x"></i>}
      </div>
      {/* <h1>Home Component </h1>
  <h3>Counter fron rfc : {count}</h3>
  <button className="btn btn-danger" onClick={changeCount}>change</button> */}
    </>
  );
}
