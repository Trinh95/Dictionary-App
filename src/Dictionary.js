import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState();
  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiUrl).then(handleResponse);
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
