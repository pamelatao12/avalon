import React, { useState } from "react";
import "pages/play/components/table/tableCards.css";
import Card from "pages/play/components/table/card";

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
      <Card key={burn} />
      {cards.map((card, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default TableCards;
