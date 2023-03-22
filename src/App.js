import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";

function App() {
  const movies = [
    {
      title: "card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/100",
    },
    {
      title: "card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/101",
    },
    {
      title: "card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/102",
    },
    {
      title: "card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/103",
    },
    {
      title: "card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://picsum.photos/200/104",
    },
  ];

  return (
    <div className="App">
      <MovieList movie={movies} />
    </div>
  );
}

export default App;
