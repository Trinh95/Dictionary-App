import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState();
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${keyword}'s definition`);
  }
  function handleKeyword(response) {
    setKeyword(response.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleKeyword}></input>
      <input type="submit" value="Search"></input>
    </form>
  );
}
