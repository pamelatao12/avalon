import React, { useState } from "react";
import "pages/play/components/table/player.css";
import Card from "pages/play/components/table/card";

const Player = ({ name, pic, position }) => {
  const [cards, setCards] = useState([["Q", "Spades"], ["10", "Clubs"]]);
  return (
    <div className={`playerProfile${position}`}>
      <div className={`playerCards${position}`}>
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
