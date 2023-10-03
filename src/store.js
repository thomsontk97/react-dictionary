
import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./reducers/historyReducer";
import wordDetailsReducer from "./reducers/wordDetailsReducer";

const store = configureStore({
  reducer: {
    history: historyReducer,
    wordDetails: wordDetailsReducer
    
  },
});

export default store;
