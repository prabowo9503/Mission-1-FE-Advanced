import { useRef, useState } from "react";
import {
  FaPlay,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import Movie1 from "../Assets/melanjutkan/move 1.png";
import Movie2 from "../Assets/melanjutkan/movie 2.png";
import Movie3 from "../Assets/melanjutkan/movie 3.png";
import Movie4 from "../Assets/melanjutkan/movie 4.png";
import Movie5 from "../Assets/melanjutkan/movie5.png";

const movies = [

  {
    id:1,
    title:"Don't Look Up",
    image:Movie1,
    rating:"4.5"
  },

  {
    id:2,
    title:"All of Us Are Dead",
    image:Movie2,
    rating:"4.3"
  },

  {
    id:3,
    title:"Blue Lock",
    image:Movie3,
    rating:"4.6"
  },

  {
    id:4,
    title:"A Man Called Otto",
    image:Movie4,
    rating:"4.7"
  },

  {
    id:5,
    title:"Shazam!",
    image:Movie5,
    rating:"4.8"
  }

];

const ContinueToWatch = () => {

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

    return(
        <section className="movie-row-continue">
              <h2>Melanjutkan Tonton Film</h2>
              <button className="arrow left" onClick={scrollLeft}>
                <FaChevronLeft />
              </button>
              <div className="movie-list-continue" ref={listRef}>
                {movies.map((movie) => (
                  <div
                    className={`movie-card-continue ${
                      hovered === movie.id ? "active" : ""
                    }`}
                    key={movie.id}
                    onMouseEnter={() => setHovered(movie.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={movie.image}
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
                          ⭐ {movie.rating}
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

        export default ContinueToWatch