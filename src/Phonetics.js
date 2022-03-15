import React from "react";
import "./Phonetics.css";
export default function Phonetics(props) {
  let data = props.phonetics;
  console.log(data);
  if (data.length !== 0) {
    return (
      <div className="Phonetics">
        {data.map(function (dataEach, index) {
          return (
            <span key={index}>
              <a href={[dataEach.audio]} target="_blank" rel="noreferrer">
                <i class="fa-solid fa-volume-high"></i>
              </a>
              {dataEach.text}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
