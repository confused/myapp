import { useState, useEffect } from "react";

const apiUrl = "https://api.chucknorris.io/jokes/search?query=";

export default function useChuckNorris(topic) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl + topic)
      .then(resp => resp.json())
      .then(json => {
        console.log("got data");
        setIsLoading(false);
        setData(json.result);
      });
  }, [topic]);

  return [isLoading, data];
}
