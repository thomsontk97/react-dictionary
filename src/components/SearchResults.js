// import React from "react";

// const SearchResults = ({ results }) => {
//   return (
//     <div className="results">
//       <h2>{results.word}</h2>
//       <p>{results.phonetic}</p>
      
//       <audio controls>
//         <source src={results.phonetics[0].audio} type="audio/mpeg" />
//         {/* Your browser does not support the audio element. */}
//       </audio>        
      
      
//     </div>
//   );
// };

// export default SearchResults;
import React from "react";

const SearchResults = ({ results }) => {
  if (!results) {
    return null; // Handle the case when there are no results yet
  }

  const { word, phonetic, phonetics, meanings } = results;

  return (
    <div className="results">
      {word && <h2>{word}</h2>}
      {phonetic && <p>{phonetic}</p>}

      {/* {phonetics && phonetics.length > 0 && (
        phonetics.map((item)=>(
          <p>{item.text}</p>
          <audio controls>
          <source src={item.audio} type="audio/mpeg" />
          </audio>
        ))
      )} */}

      {phonetics && phonetics.length > 0 && (
        phonetics.map((item) => (
         <div key={item.text}>
          
          <audio controls>
          <source src={item.audio} type="audio/mpeg" />
          </audio>
          <p>{item.text}</p>
         </div>
        ))
      )}


      {
        meanings && meanings.length > 0 && (
          meanings.map((item)=>(
            <div>
              <h3>{item.partOfSpeech}</h3>
              <p>{item.definitions[0].definition}</p>
            </div>

          ))
        )
      }
    </div>
  );
};

export default SearchResults;
