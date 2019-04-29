import React, { Component } from "react";
import Row from "./Row";

const rowData = [
  { name: "Contract", description: "1 doc" },
  { name: "Agreement", description: "2 docs" },
  { name: "Addendum", description: "4 docs" }
];

class RowContainer extends Component {
  state = {
    rowData
  };

  handleClick = selectedIdx => {
    const newRowData = this.state.rowData.map((row, idx) => ({
      ...row,
      isSelected: selectedIdx === idx
    }));
    this.setState({ rowData: newRowData });
  };

  render() {
    return (
      <div>
        {this.state.rowData.map((row, idx) => (
          <Row
            key={idx}
            name={row.name}
            description={row.description}
            isSelected={row.isSelected}
            onClick={() => this.handleClick(idx)}
          />
        ))}
      </div>
    );
  }
}

export default RowContainer;
