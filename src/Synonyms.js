import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <span className="title">Synonyms: </span>

        <span className="synonym-word">
          {props.synonyms.map(function (synonym, index) {
            function setKeyword(event) {
              event.preventDefault();
              alert(`Searching for ${synonym}`);
            }
            return (
              <ul key={index}>
                <li>
                  <a href="/" onClick={setKeyword}>
                    {synonym}
                  </a>
                </li>
              </ul>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
