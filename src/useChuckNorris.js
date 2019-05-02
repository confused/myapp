import React, { useState, useRef, useEffect } from "react";
import Row from "./Row";

const apiUrl = "https://api.chucknorris.io/jokes/search?query=work";

function useChuckNorris() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(json => {
        console.log("got data");
        setData(json.result);
      });
  }, []);

  return data;
}

export default useChuckNorris;
