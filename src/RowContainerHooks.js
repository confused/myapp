import React, { useState, useRef, useEffect } from "react";
import Row from "./Row";

const rowData = [
  { name: "Contract", description: "1 doc" },
  { name: "Agreement", description: "2 docs" },
  { name: "Addendum", description: "4 docs" }
];

const apiUrl = "https://api.chucknorris.io/jokes/search?query=work";

function RowContainer() {
  const [data, setData] = useState(rowData);
  const inputRef = useRef();

  useEffect(() => {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(json => {
        console.log("got data");
        setData(json.result);
      });
  }, []);
  const handleClick = selectedIdx => {
    const newRowData = data.map((row, idx) => ({
      ...row,
      isSelected: selectedIdx === idx
    }));
    setData(newRowData);
  };

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Go</button>
      {data.map((row, idx) => (
        <Row
          key={idx}
          name={row.value}
          description={row.description}
          isSelected={row.isSelected}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}

export default RowContainer;
