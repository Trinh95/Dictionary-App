import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Response.css";

export default function Response(props) {
  let data = props.response;
  console.log(data);
  if (props.response) {
    return (
      <div className="Response">
        <section>
          <h2>{data.word}</h2>
          <Phonetics phonetics={data.phonetics} />
        </section>

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
