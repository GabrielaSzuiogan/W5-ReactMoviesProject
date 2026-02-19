import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { useMoviesCtx } from "./context/MovieContext"; // Import custom hook

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
  // only the arrays we need for routing from Context
  const { moviesData, watchlist, favorites } = useMoviesCtx();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* pass 'movies' to the list now, no more common props! */}
        <Route
          index
          element={<MovieList movies={moviesData} currentView="home" />}
        />
        <Route
          path="watchlist"
          element={<MovieList movies={watchlist} currentView="watchlist" />}
        />
        <Route
          path="favorites"
          element={<MovieList movies={favorites} currentView="favorites" />}
        />
        <Route path="movies/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
