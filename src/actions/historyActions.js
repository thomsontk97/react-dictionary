export const addToHistory = (word) => {
    return {
      type: "ADD_TO_HISTORY",
      payload: word,
    };
  };