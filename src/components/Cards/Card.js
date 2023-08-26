import React from "react";
import "./Card.css";

const Card = ({ results }) => {
  let display;
  console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, name, image, gender, status } = x;
      return (
        <div key={id} className="col-4 position-relative">
          <div className="cards mb-4">
            <img src={image} alt="" className="img-fluid" />

            {(() => {
              if (status === "Dead") {
                return (
                  <div className="badge text-bg-danger mb-1">{status}</div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="badge text-bg-success mb-1">{status}</div>
                );
              } else {
                return (
                  <div className="badge text-bg-secondary mb-1">{status}</div>
                );
              }
            })()}

            <div className="content">
              <div className="fs-5 mb-1">
                <b>{name}</b>
              </div>
              <div className="fs-6 mb-1">{gender}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "Character does not exist";
  }
  return <>{display}</>;
};

export default Card;
