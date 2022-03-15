import React from "react";

export default function Example(props) {
  if (props.example !== undefined) {
    return (
      <div className="Example">
        <small>
          Ex: <em>{props.example}</em>
        </small>
      </div>
    );
  } else {
    return null;
  }
}
