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
    <div className="Dictionary">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="col-3 me-3">
              <input
                type="search"
                placeholder="Type a word"
                onChange={handleKeyword}
                className="form-control"
              ></input>
            </div>
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
        <Response response={response} />
      </div>
    </div>
  );
}
