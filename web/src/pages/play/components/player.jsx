import React, { useState } from "react";
import "./player.css";
import Card from "./card";

const Player = ({ name, pic }) => {
  const [cards, setCards] = useState([["Q", "Spades"], ["10", "Clubs"]]);
  return (
    <div className="playerProfile">
      <div className="playerCards">
        {cards.map((card, i) => (
          <Card key={i} number={card[0]} suit={card[1]} />
        ))}
      </div>
      <div className="playerDetailsWrapper">
        <img className="circleCrop" src={pic} alt="user" />
        <div className="playerDetails">{name}</div>
      </div>
    </div>
  );
};

export default Player;
