import React, { useState, useRef } from "react";
import Row from "./Row";
import useChuckNorris from "./useChuckNorris";

function RowContainer() {
  const [topic, setTopic] = useState("work");
  const [isLoading, data] = useChuckNorris(topic);
  const inputRef = useRef();

  const handleClick = selectedIdx => {
    /*const newRowData = data.map((row, idx) => ({
      ...row,
      isSelected: selectedIdx === idx
    }));
    setData(newRowData);*/
  };

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
    setTopic(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Go</button>
      {isLoading && <div>Loding</div>}
      {data.map((row, idx) => (
        <Row
          key={idx}
          name={row.value}
          isSelected={row.isSelected}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}

export default RowContainer;
