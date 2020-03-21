import React, { useState } from "react";
import "pages/play/components/table/tableCards.css";
import Card from "pages/play/components/table/card";

const TableCards = () => {
  const [burn, setBurn] = useState(false);
  const [cards, setCards] = useState([
    // ["A", "Spades"],
    // ["2", "Clubs"],
    // ["3", "Hearts"],
    // ["4", "Diamond"],
    // ["5", "Spades"]
    ["undef", "undef"],
    ["undef", "undef"],
    ["undef", "undef"],
    ["undef", "undef"],
    ["undef", "undef"]
  ]);

  return (
    <div className="cardSet">
      <Card key={burn} number="back" suit="back" />
      {cards.map((card, i) => (
        <Card key={i} number={card[0]} suit={card[1]} />
      ))}
    </div>
  );
};

export default TableCards;
