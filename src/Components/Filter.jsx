import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const Filter = ({ handleSearchItem }) => {
  const [SearchItem, setSearchItem] = useState("");

  const handleMovie = () => {
    handleSearchItem(SearchItem);
  };

  return (
    <div className="d-flex justify-content-center p-3 ">
      <input
        style={{
          border: "none",
        }}
        type="text"
        placeholder="Enter Movie Name"
        value={SearchItem}
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      />
      <button onClick={handleMovie} className="btn btn-info">
        Filter
      </button>
    </div>
  );
};

export default Filter;
