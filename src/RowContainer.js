import React, { Component } from "react";
import Row from "./Row";

const rowData = [
  { name: "Contract", description: "1 doc" },
  { name: "Agreement", description: "2 docs" },
  { name: "Addendum", description: "4 docs" }
];

const apiUrl = "https://api.chucknorris.io/jokes/search?query=work";

class RowContainer extends Component {
  state = {
    rowData
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        this.setState({ rowData: json.result });
      });
  }
  handleClick = selectedIdx => {
    const newRowData = this.state.rowData.map((row, idx) => ({
      ...row,
      isSelected: selectedIdx === idx
    }));
    this.setState({ rowData: newRowData });
  };

  handleButtonClick = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleButtonClick}>Go</button>
        {this.state.rowData.map((row, idx) => (
          <Row
            key={idx}
            name={row.value}
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
