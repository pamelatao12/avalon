import React from "react";
import "pages/play/components/table/card.css";

const Card = ({ number, suit }) => {
  return (
    <div
      className={number == "undef" ? "emptyCard" : "card"}
      style={{ backgroundImage: `url("/${number}${suit}.png")` }}
    ></div>
  );
};

export default Card;
