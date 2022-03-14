import React from "react";
//Show the partOfSpeech, definition and example
export default function Meaning(props) {
  let data = props.meaning;
  console.log(data);
  return (
    <div className="Meaning">
      <strong>{data.partOfSpeech}</strong>
      <p>
        {data.definitions.map(function (definition, index) {
          if (definition.example !== undefined) {
            return (
              //Show definition & example
              <div key={index}>
                <ul>
                  <li>
                    <div>{definition.definition}</div>
                    <small>
                      Ex: <em>{definition.example}</em>
                    </small>
                  </li>
                </ul>
              </div>
            );
          } else {
            return null;
          }
        })}
      </p>
    </div>
  );
}
