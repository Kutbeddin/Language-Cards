import "./App.css";
import React from "react";
import { categories } from "./data/data";
import { useState } from "react";
import Card from "./components/card/Card";

function App() {
  const [cards, setcards] = useState(categories);
  const [display, setDisplay] = useState(true);

  const handleclick = () => setDisplay(!display);
  return (
    <div className="App">
      <div className="container design">
        <div className="header">
          <h1 className="text">Languages</h1>
        </div>
        <div className="design2">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              display={display}
              handleclick={handleclick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
