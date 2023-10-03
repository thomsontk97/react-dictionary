// src/components/HistoryPage.js

import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const HistoryPage = () => {
  const history = useSelector((state) => state.history.history); 
  console.log("history",history)

  return (
    <div>
      <h1>Search History</h1>
      <ul>
        {history.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default HistoryPage;
