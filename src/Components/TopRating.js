import { useEffect, useState } from "react";
import MovieRow from "./MovieRow";
import { getTopRatedMovieList } from "../api";

const TopRating = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      const result = await getTopRatedMovieList();
      setMovies(result);
    };

    fetchMovies();

  }, []);

  return (
    <MovieRow
      title="Top Rating Film dan Series Hari ini"
      movies={movies}
      type="poster"
    />
  );

};

export default TopRating;