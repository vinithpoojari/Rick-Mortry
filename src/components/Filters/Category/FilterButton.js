import React from "react";
import PropTypes from "prop-types";
import Gender from "./Gender";

const FilterButton = ({ name, index, items, task }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-warning" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

FilterButton.propTypes = {};

export default FilterButton;
