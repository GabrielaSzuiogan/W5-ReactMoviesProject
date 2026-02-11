import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [searchGenre, setSearchGenre] = useState("");
  const [genre, setGenre] = useState("");
  return (
    <>
      <Header setSearchGenre={setSearchGenre} setGenre={setGenre} />
      <MovieList searchGenre={searchGenre} genre={genre} />
      <Footer />
    </>
  );
}

export default App;
