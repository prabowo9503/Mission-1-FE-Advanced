import { useEffect, useState } from "react";
import MovieRow from "./MovieRow";
import { getTrendingMovieList } from "../api";

const FilmTrending = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      const result = await getTrendingMovieList();
      setMovies(result);
    };

    fetchMovies();

  }, []);

  return (
    <MovieRow
      title="Film Trending"
      movies={movies}
      type="poster"
    />
  );

};

export default FilmTrending;