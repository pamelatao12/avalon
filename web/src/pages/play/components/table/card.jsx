import React from "react";
import classNames from "classnames";
import "pages/play/components/table/card.css";

const Card = ({ number, suit, show }) => {
  const suitKey = {
    SPADE: 9824,
    HEART: 9829,
    DIAMOND: 9830,
    CLUB: 9827
  };
  return (
    <div
      className={classNames(
        number == "undef"
          ? "emptyCard"
          : show == true
          ? "openHand"
          : "closeHand"
      )}
    >
      <p
        className={classNames(
          show == true ? "cardNum" : "emptyCardSuit",
          suit == "HEART" || suit == "DIAMOND" ? "redCardNum" : "blackCardNum"
        )}
      >
        {number}
      </p>
      <p
        className={classNames(
          show == true ? "cardSuit" : "emptyCardSuit",
          suit == "HEART" || suit == "DIAMOND" ? "redCardNum" : "blackCardNum"
        )}
      >
        {String.fromCharCode(suitKey[suit])}
      </p>
    </div>
  );
};

export default Card;
