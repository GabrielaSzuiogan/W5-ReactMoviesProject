import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import { useEffect, useState } from "react";
import moviesData from "./movies.json";

function App() {
  const [searchGenre, setSearchGenre] = useState("");
  const [genre, setGenre] = useState("");

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

  const handleToggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.find((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const handleToggleFavorite = (movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const commonProps = {
    searchGenre,
    genre,
    watchlist,
    favorites,
    onToggleWatchlist: handleToggleWatchlist,
    onToggleFavorite: handleToggleFavorite,
  };

  return (
    <>
      <Header setSearchGenre={setSearchGenre} setGenre={setGenre} />

      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              {...commonProps}
              movies={moviesData}
              currentView="home"
            />
          }
        />

        <Route
          path="/watchlist"
          element={
            <MovieList
              {...commonProps}
              movies={watchlist}
              currentView="watchlist"
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <MovieList
              {...commonProps}
              movies={favorites}
              currentView="favorites"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
