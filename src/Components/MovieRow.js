import { useRef, useState } from "react";
import {
  FaPlay,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const MovieRow = ({ title, movies = [] }) => {
  const listRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const scrollLeft = () => {
    listRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="movie-row">
      <h2>{title}</h2>
      <button className="arrow left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>
      <div className="movie-list" ref={listRef}>
        {movies.map((movie) => (
          <div
            className={`movie-card ${
              hovered === movie.id ? "active" : ""
            }`}
            key={movie.id}
            onMouseEnter={() => setHovered(movie.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={movie.poster_path? `${process.env.REACT_APP_BASEIMG}${movie.poster_path}`: movie.image}
            alt={movie.title}
            />
            <div className="movie-overlay">
              <div className="movie-buttons">
                <button>
                  <FaPlay />
                </button>
                <button>
                  <FaCheck />
                </button>
                <button className="more">
                  <FaChevronDown />
                </button>
              </div>
              <div className="movie-detail">
                <h5>{movie.title}</h5>
                <span>
                  ⭐ {movie.vote_average || movie.rating}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

      <button className="arrow right" onClick={scrollRight}>
        <FaChevronRight />
      </button>

    </section>
  );
};

export default MovieRow;