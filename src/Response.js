import React from "react";
import Meaning from "./Meaning";

export default function Response(props) {
  if (props.response) {
    let data = props.response;
    console.log(data);
    return (
      <div className="Response">
        <h2 className="text-center">{data.word}</h2>
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
