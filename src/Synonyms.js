import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length !== 0) {
    return (
      <div>
        <span>Synonyms: </span>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
