import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import moviesData from "./movies.json";

function App() {
  const [searchGenre, setSearchGenre] = useState("");
  const [genre, setGenre] = useState("");

  const [watchlist, setWatchlist] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  const handleToggleWatchlist = (movie) => {
    setWatchlist((prev) => {
      // If found, remove it. If not found, add it.
      if (prev.find((m) => m.id === movie.id)) {
        return prev.filter((m) => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  let moviesToShow = moviesData;
  if (currentView === "watchlist") moviesToShow = watchlist;
  return (
    <>
      <Header
        setSearchGenre={setSearchGenre}
        setGenre={setGenre}
        onNavigate={setCurrentView}
      />
      <MovieList
        searchGenre={searchGenre}
        genre={genre}
        movies={moviesToShow}
        watchlist={watchlist}
        onToggleWatchlist={handleToggleWatchlist}
      />
      <Footer />
    </>
  );
}

export default App;
