import React, { useState } from "react";
import "pages/play/components/table/player.css";
import Card from "pages/play/components/table/card";
import Profile from "pages/play/components/table/profile";

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
