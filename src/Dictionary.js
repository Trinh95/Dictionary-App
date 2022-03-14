import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";

export default function Dictionary() {
  const [keyword, setKeyword] = useState();
  const [response, setResponse] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResponse(response.data[0]);
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
      <Response response={response} />
    </form>
  );
}
