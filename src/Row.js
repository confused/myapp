import React from "react";
import PropTypes from "prop-types";
import "./row.css";

function Row({ name, description, isSelected, onClick }) {
  const className = isSelected ? "row selected" : "row";
  return (
    <div className={className} onClick={onClick}>
      <strong>{name}</strong>
      <br />
      {description}
    </div>
  );
}

Row.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  newVal: PropTypes.string
};

export default Row;
