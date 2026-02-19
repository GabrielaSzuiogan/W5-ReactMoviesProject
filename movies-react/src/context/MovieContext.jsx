/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import moviesData from "../movies.json";

//create the context
const MovieContext = createContext();

//create the provider component
export const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(
    () => JSON.parse(localStorage.getItem("watchListLS")) || [],
  );
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favoritesLS")) || [],
  );

  useEffect(() => {
    localStorage.setItem("watchListLS", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    localStorage.setItem("favoritesLS", JSON.stringify(favorites));
  }, [favorites]);

  const toggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.find((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  // put everything we want to share globally
  const value = {
    moviesData,
    watchlist,
    favorites,
    toggleWatchlist,
    toggleFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

// custom hook so we don't have to import useContext everywhere
export const useMoviesCtx = () => {
  return useContext(MovieContext);
};
