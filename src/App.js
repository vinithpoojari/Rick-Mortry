import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/Filters/Filter";
import Card from "./components/Cards/Card";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { indexOf, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;

  useEffect(() => {
    async function abc() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    }
    abc();

    //let abdcbc = () => {};
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center my-4">RICK AND MORTY</h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Search setSearch={setSearch}></Search>
            <Filter setGender={setGender} setStatus={setStatus}></Filter>
          </div>
          <div className="col-9">
            <div className="row">
              <Card results={results}></Card>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      ></Pagination>
    </div>
  );
}

export default App;
