import React, { Component } from "react";
import PropTypes from "prop-types";
import "./row.css";

class Row extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    newVal: PropTypes.string
  };

  render() {
    const { name, description, isSelected, onClick } = this.props;
    const className = isSelected ? "row selected" : "row";
    return (
      <div className={className} onClick={onClick}>
        <strong>{name}</strong>
        <br />
        {description}
      </div>
    );
  }
}

export default Row;
