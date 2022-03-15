import React from "react";
import "./Photo.css";

export default function Photo(props) {
  if (props.photoData) {
    return (
      <div className="Photo">
        <section className="row">
          {props.photoData.photos.map(function (photo, index) {
            return (
              <div className="col-6">
                <a href={photo.src.original} target="_blank">
                  <img src={photo.src.landscape} key={index}></img>
                </a>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
