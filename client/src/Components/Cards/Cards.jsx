import Card from "../Card/Card";
import React from "react";
import "./Cards.css";
import loading from "../../assets/loading.gif";

function Cards({ cars, ttFilt }) {
  return (
    <div>
      <h1 className="tittleCar">Cars ({ttFilt})</h1>
      <div className="cards">
        {cars.length > 0 ? (
          cars.map((car) => <Card car={car} />)
        ) : (
          <div className="loading">
            <img src={loading} alt="loading" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
