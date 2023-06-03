import axios from "axios";
import { useEffect, useState } from "react";



export default function useCustom()
{
  let [trendingmovies, setMovie] = useState([]);

  async function getTrindingMovies() {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=358468a6320ef5fd87213fe790a3ce2a"
    );
    setMovie(data.results);
  }

  useEffect(() => {
    getTrindingMovies();
  }, []);
  return {trendingmovies};
}