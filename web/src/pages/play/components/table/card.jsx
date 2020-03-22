import React from "react";
import classNames from "classnames";
import "pages/play/components/table/card.css";

const Card = ({ number, suit }) => {
  const suitKey = {
    SPADE: 9824,
    HEART: 9829,
    DIAMOND: 9830,
    CLUB: 9827
  };
  return (
    <div
      className={number == "undef" ? "emptyCard" : "card"}
      style={{ backgroundImage: `url("/${number}${suit}.png")` }}
    >
      <p
        className={classNames(
          number == "undef" ? "emptyCardSuit" : "cardNum",
          suit == "HEART" || suit == "DIAMOND" ? "redCardNum" : "blackCardNum"
        )}
      >
        {number}
      </p>
      <p
        className={classNames(
          number == "undef" ? "emptyCardSuit" : "cardSuit",
          suit == "HEART" || suit == "DIAMOND" ? "redCardNum" : "blackCardNum"
        )}
      >
        {String.fromCharCode(suitKey[suit])}
      </p>
    </div>
  );
};

export default Card;
