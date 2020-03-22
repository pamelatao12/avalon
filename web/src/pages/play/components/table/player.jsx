import React, { useState } from "react";
import styles from "pages/play/components/table/player.module.css";
import Card from "pages/play/components/table/card";

const Player = ({
  name,
  pic,
  position,
  money,
  bet,
  cardSet,
  showHand,
  myTurn
}) => {
  const [cards, setCards] = useState([
    [cardSet[0][0], cardSet[0][1]],
    [cardSet[1][0], cardSet[1][1]]
  ]);

  const style = cardSet[0][0] === "" ? { visibility: "hidden" } : {};

  return (
    <div className={styles["playerProfile" + position]}>
      <div className={styles["playerBet" + position]} style={style}>
        <span>&#10050;</span>${bet}
      </div>
      <div className={styles["playerCards" + position]}>
        {cards.map((card, i) => (
          <Card
            key={i}
            number={cardSet[0][0] === "" ? "undef" : card[0]}
            suit={cardSet[0][0] === "" ? "undef" : card[1]}
            show={showHand}
          />
        ))}
      </div>
      <div
        className={
          myTurn
            ? styles.playerDetailsWrapperOnTurn
            : styles.playerDetailsWrapper
        }
      >
        <img className={styles.circleCrop} src={pic} alt="user" />
        <div className={styles.playerNameMoneyWrapper}>
          <div className={styles.playerDetails}>{name}</div>
          <div className={styles.playerTotalMoney}>${money}</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
