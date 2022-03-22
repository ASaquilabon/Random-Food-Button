import React, { useState } from "react";
import Button from "../button";
import "./SearchBar.css";

function SearchBar(props) {
  const [searchLocationQuery, setSearchLocationQuery] = useState("");
  const [item, setItem] = useState(props.item);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchLocationQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(searchLocationQuery);
  };

  return (
    <div className="searchForm">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label
          htmlFor="location"
          arialabel="Enter City, Address, or Postal code"
          className="searchForm-label"
        >
          <h1>Can't decide on what to eat?!</h1>
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter City, Address, or Postal code"
          value={searchLocationQuery}
          onChange={handleSearchChange}
          className="searchForm__input"
        />
        <Button handleFormSubmit={handleFormSubmit} />
      </form>
      <a href="#result-section">
        <div className="result-text">
          <p class="random">{props.item}</p>
        </div>
      </a>
    </div>
  );
}
export default SearchBar;
