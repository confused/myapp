import React, { useState } from "react";
import Row from "./Row";

const initialData = [
  { name: "Contract", description: "1 doc" },
  { name: "Agreement", description: "2 docs" },
  { name: "Addendum", description: "4 docs" }
];

function RowContainer() {
  const [rowData, setRowData] = useState(initialData);

  const handleClick = selectedIdx => {
    const newRowData = rowData.map((row, idx) => ({
      ...row,
      isSelected: selectedIdx === idx
    }));
    setRowData(newRowData);
  };

  return (
    <div>
      {rowData.map((row, idx) => (
        <Row
          key={idx}
          name={row.name}
          description={row.description}
          isSelected={row.isSelected}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}

export default RowContainer;
