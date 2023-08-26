import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((a) => a + 1);
  };
  let back = () => {
    if (pageNumber === 1) return;
    setPageNumber((a) => a - 1);
  };
  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={back} class="btn btn-warning">
        Back
      </button>
      <button onClick={next} class="btn btn-warning">
        Next
      </button>
    </div>
  );
};

export default Pagination;
