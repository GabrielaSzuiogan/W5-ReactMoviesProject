import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MainContent/MovieList";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [searchGenre, setSearchGenre] = useState("");
  return (
    <>
      <Header setSearchGenre={setSearchGenre} />
      <MovieList searchGenre={searchGenre} />
      <Footer />
    </>
  );
}

export default App;
