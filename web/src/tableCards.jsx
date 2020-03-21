import React, { useState } from "react";
import "./tableCards.css";
import Card from "./card";

const TableCards = () => {
  const [burn, setBurn] = useState(false);
  const [cards, setCards] = useState([
    ["A", "Spades"],
    ["2", "Clubs"],
    ["3", "Hearts"],
    ["4", "Diamond"],
    ["5", "Spades"]
  ]);

  return (
    <div className="cardSet">
      {cards.map(card => (
        <Card key={card[0]} />
      ))}
    </div>
  );
};

export default TableCards;
