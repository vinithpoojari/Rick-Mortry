import React from "react";
import FilterButton from "./FilterButton";

const Gender = ({ setGender }) => {
  let genders = ["male", "female", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
            <FilterButton
              task={setGender}
              key={index}
              name="gender"
              index={index}
              items={items}
            ></FilterButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
