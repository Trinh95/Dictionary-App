import React, { useState } from "react";
import axios from "axios";
import Response from "./Response";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [response, setResponse] = useState(null);

  function handleResponse(response) {
    setResponse(response.data[0]);
  }

  function search() {
    setLoaded(true);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeyword(response) {
    setKeyword(response.target.value);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <section>
            <form onSubmit={handleSubmit}>
              <div className="d-flex justify-content-center">
                <div className="col-3 me-3">
                  <input
                    type="search"
                    placeholder="Type a word"
                    onChange={handleKeyword}
                    className="form-control"
                    defaultValue={props.defaultKeyword}
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </section>
          <Response response={response} />
        </div>
      </div>
    );
  } else {
    search();
  }
}
