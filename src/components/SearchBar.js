import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchText);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
