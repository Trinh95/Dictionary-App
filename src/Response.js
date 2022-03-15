import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Response(props) {
  let data = props.response;
  console.log(data);
  if (props.response) {
    return (
      <div className="Response">
        <h2 className="text-center">{data.word}</h2>
        <Phonetics phonetics={data.phonetics} />
        {data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
