import { Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

function App() {
  //arrays from the Redux store
  const { allMovies, watchlist, favorites } = useSelector(
    (state) => state.movies,
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<MovieList movies={allMovies} currentView="home" />}
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
