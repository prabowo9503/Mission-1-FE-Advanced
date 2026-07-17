import { useEffect, useState } from "react";
import MovieRow from "./MovieRow";
import { getNewReleaseMovieList } from "../api";

const NewRelease = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const fetchMovies = async () => {
      const result = await getNewReleaseMovieList();
      setMovies(result);
    };

    fetchMovies();

  }, []);

  return (
    <MovieRow
      title="Rilis Baru"
      movies={movies}
      type="poster"
    />
  );

};

export default NewRelease;