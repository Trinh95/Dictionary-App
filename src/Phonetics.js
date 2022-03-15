import React from "react";
export default function Phonetics(props) {
  let data = props.phonetics;
  console.log(data);
  if (data.length !== 0) {
    return (
      <div>
        {data.map(function (dataEach, index) {
          return (
            <div key={index}>
              {dataEach.text}
              <a href={[dataEach.audio]} target="_blank" rel="noreferrer">
                Listen
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
