import React from "react";
import "./Synonyms.css";
import Dictionary from "./Dictionary";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <span className="title">Synonyms: </span>

        <div className="synonym-word">
          {props.synonyms.map(function (synonym, index) {
            function setKeyword(event) {
              event.preventDefault();
              alert(`Searching for ${synonym}`);
              <Dictionary defaultKeyword={synonym} />;
            }
            return (
              <ul>
                <li key={index}>
                  <a href="/" onClick={setKeyword}>
                    {synonym}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
