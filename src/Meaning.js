import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
//Show the partOfSpeech, definition and example
export default function Meaning(props) {
  let data = props.meaning;
  console.log(data);
  console.log(data.synonyms);
  return (
    <div className="Meaning">
      <strong>{data.partOfSpeech}</strong>
      {data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>
                <div>{definition.definition}</div>
                <Example example={definition.example} />
              </li>
            </ul>
          </div>
        );
      })}
      <Synonyms synonyms={data.synonyms} />
    </div>
  );
}
