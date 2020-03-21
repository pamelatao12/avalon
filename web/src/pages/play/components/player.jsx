import React, { useState } from "react";
import "./player.css";
import Card from "./card";

const Player = () => {
  const [cards, setCards] = useState([["Q", "Spades"], ["10", "Clubs"]]);
  return (
    <div className="playerCards">
      {cards.map((card, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default Player;
