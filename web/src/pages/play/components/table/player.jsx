import React, { useState } from "react";
import "pages/play/components/table/player.css";
import Card from "pages/play/components/table/card";

const Player = ({ name, pic, position, playing }) => {
  const [cards, setCards] = useState([["back", "back"], ["back", "back"]]);
  return (
    <div className={`playerProfile${position}`}>
      <div className={`playerCards${position}`}>
        {cards.map((card, i) => (
          <Card
            key={i}
            number={playing == true ? card[0] : "undef"}
            suit={playing == true ? card[1] : "undef"}
          />
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
