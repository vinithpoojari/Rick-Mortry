import React from "react";
import Gender from "../Filters/Category/Gender";
import Status from "../Filters/Category/Status";
const Filter = ({ setStatus, setGender }) => {
  let remove = () => {
    setStatus("");
    setGender("");
    window.location.reload(false);
  };
  return (
    <div className="col-9">
      <div className="text-center fw-bold fs-4 mb-3">Filters </div>
      <div
        onClick={remove}
        className="text-center text-warning text-decoration-underline mb-3"
      >
        REMOVE
      </div>

      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender}></Gender>
        <Status setStatus={setStatus}></Status>
      </div>
    </div>
  );
};

export default Filter;
