import React from "react";
import classNames from "classnames";
import styles from "pages/play/components/table/card.module.css";

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
        number === "undef"
          ? styles.emptyCard
          : show === true
          ? styles.openHand
          : styles.closeHand
      )}
    >
      <p
        className={classNames(
          show === true ? styles.cardNum : styles.emptyCardSuit,
          suit === "HEART" || suit === "DIAMOND"
            ? styles.redCardNum
            : styles.blackCardNum
        )}
      >
        {number}
      </p>
      <p
        className={classNames(
          show === true ? styles.cardSuit : styles.emptyCardSuit,
          suit === "HEART" || suit === "DIAMOND"
            ? styles.redCardNum
            : styles.blackCardNum
        )}
      >
        {String.fromCharCode(suitKey[suit])}
      </p>
    </div>
  );
};

export default Card;
