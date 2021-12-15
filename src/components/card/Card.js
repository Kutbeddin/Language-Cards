import React from "react";
import "./Card.css";
const Card = ({ card, handleclick, display }) => {
  const { img, name, options } = { ...card };
  return (
    <div className="container card" onClick={handleclick}>
      {display ? (
        <div className="img">
          <img className="img" src={img} alt={name} />
          <h1>{name}</h1>
        </div>
      ) : (
        <Option options={options} name={name} />
      )}
    </div>
  );
};

function Option({ options, name }) {
  return (
    <ul>
      <h2 className="name">{name}</h2>
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ul>
  );
}

export default Card;
