import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useDispatch } from "react-redux";
import {addToHistory} from "../actions/historyActions";
import Loader from "./Loader";

const Search = ()=>{
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = (searchText) => {

    setLoading(true);
    
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;

   
    axios.get(apiUrl)
      .then((response) => {
        const results = response.data[0];
        console.log(results);
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when API response is received
      });

      dispatch(addToHistory(searchText));
  };

  return (
    <div className="search">
      <SearchBar handleSearch={handleSearch} />
      <SearchResults results={searchResults} />
      {
        loading ? <Loader/> : ""
      }
    </div>
  );
}

export default Search;
