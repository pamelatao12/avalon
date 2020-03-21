import React, { useState } from "react";
import "./player.css";
import Card from "./card";
import Profile from "./profile";

const Player = () => {
  const [cards, setCards] = useState([["Q", "Spades"], ["10", "Clubs"]]);
  return (
    <>
      <div className="playerProfile">
        <Profile />
      </div>
      <div className="playerCards">
        {cards.map((card, i) => (
          <Card key={i} number={card[0]} suit={card[1]} />
        ))}
      </div>
    </>
  );
};

export default Player;
