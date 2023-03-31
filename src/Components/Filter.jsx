import React, { useState } from "react";

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
        className="inp"
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
