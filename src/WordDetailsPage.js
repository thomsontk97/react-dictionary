import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setWordDetails } from "./actions/wordDetailsActions";
import axios from "axios"; // Import Axios

const WordDetailsPage = () => {
  const { word } = useParams();
  const dispatch = useDispatch();
  const wordDetails = useSelector((state) => state.wordDetails.wordDetails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = response.data[0];
        dispatch(setWordDetails(data));
      } catch (error) {
        console.error("Error fetching word details: ", error);
      }
    };

    fetchData();
  }, [dispatch, word]);

  return (
    <div>
      <h1>Word Details for "{word}"</h1>
      <div>
        {wordDetails && (
          <div>
            <h2>Phonetics</h2>
            {wordDetails.phonetics && wordDetails.phonetics.map((phonetic, index) => (
              <div key={index}>
                <p>{phonetic.text}</p>
                <audio controls>
                  <source src={phonetic.audio} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </div>
        )}
  
        {wordDetails && (
          <div>
            <h2>Meanings</h2>
            {wordDetails.meanings && wordDetails.meanings.map((meaning, index) => (
              <div key={index}>
                <h3>{meaning.partOfSpeech}</h3>
                <ul>
                  {meaning.definitions.map((definition, i) => (
                    <li key={i}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default WordDetailsPage;
