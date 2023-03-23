import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Joker",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/100",
    },
    {
      title: "The Dark Knight",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/101",
    },
    {
      title: "Iron Man",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/102",
    },
    {
      title: "Top Gun",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/103",
    },
    {
      title: "Black Panther",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/104",
    },
  ]);

  const getMovie = (name) => {
    setMovies(
      movies.filter((item) =>
        item.title.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Filter handleSearchItem={getMovie} />
      <MovieList movie={movies} />
    </div>
  );
}

export default App;
