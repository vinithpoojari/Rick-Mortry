import React from "react";
import "./Search.css";
const Search = ({ setSearch }) => {
  return (
    <form className="">
      <input
        onChange={(n) => {
          setSearch(n.target.value);
        }}
        type="text"
        className="input"
      ></input>
    </form>
  );
};

export default Search;
