import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { useEffect, useState } from "react";
import moviesData from "./movies.json";
import errImg from "./assets/404err.svg";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
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
    watchlist,
    favorites,
    onToggleWatchlist: handleToggleWatchlist,
    onToggleFavorite: handleToggleFavorite,
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <MovieList
              movies={moviesData}
              currentView="home"
              {...commonProps}
            />
          }
        />

        <Route
          path="watchlist"
          element={
            <MovieList
              movies={watchlist}
              currentView="watchlist"
              {...commonProps}
            />
          }
        />

        <Route
          path="favorites"
          element={
            <MovieList
              movies={favorites}
              currentView="favorites"
              {...commonProps}
            />
          }
        />

        <Route
          path="movies/:id"
          element={<MovieDetail movies={moviesData} {...commonProps} />}
        />

        <Route
          path="*"
          element={
            <div className="err-img-wrpp">
              <img src={errImg} alt="404 ERROR" />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
