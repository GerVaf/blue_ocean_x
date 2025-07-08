import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { get } from "../api/api";

const Poster = () => {
  const [topRow, setTopRow] = useState([]);
  const [bottomRow, setBottomRow] = useState([]);

  useEffect(() => {
    get("")
      .then((res) => {
        const allMovies = res.data.results || [];
        const mid = Math.ceil(allMovies.length / 2);
        setTopRow(allMovies.slice(0, mid));
        setBottomRow(allMovies.slice(mid));
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, []);

  const renderRow = (moviesList, reverse = false, delay = 0) => (
    <motion.div
      className="flex whitespace-nowrap gap-6"
      animate={{ x: reverse ? ["-150%", "0%"] : ["0%", "-150%"] }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
        delay,
      }}
    >
      {moviesList.concat(moviesList).map((movie, index) => (
        <div
          key={`${movie.id}-${index}-${reverse ? "rev" : "fwd"}`}
          className="min-w-[200px] max-w-[200px] rounded overflow-hidden shadow bg-white"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-2">
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              {movie.title}
            </h3>
          </div>
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className="py-10 px-3 overflow-hidden">
      <div className="flex">
        <h2 className="text-xl font-bold text-white rounded-full bg-primary text-start p-2 px-4 my-10">
          The movies and series
        </h2>
      </div>

      {/* Top Row - scrolls right to left */}
      <div className="relative w-full overflow-hidden mb-8">
        {renderRow(topRow, false)}
      </div>

      {/* Bottom Row - scrolls left to right */}
      <div className="relative w-full overflow-hidden">
        {renderRow(bottomRow, true)}
      </div>
    </div>
  );
};

export default Poster;
