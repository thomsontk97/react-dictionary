

import React from 'react';
import {Routes,Route} from "react-router-dom";
// import SearchBar from './components/SearchBar';
import Search from './components/Search';
import Navbar from './components/Navabar';
import HistoryPage from "./components/HistoryPage"
import WordDetailsPage from "./WordDetailsPage"

import "./App.css"


function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Search/>}/>
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/word/:word" element={<WordDetailsPage />} />
          </Route>
          
          
        </Routes>

        {/* <Navbar/> */}
      </div>
    
  );
}

export default App;
