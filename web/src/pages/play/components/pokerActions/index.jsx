import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "./button";
import Bets from "./bets";
import BetInput from "./betInput";

const PokerActions = () => {
  //placeholder states
  const [isMyTurn, setIsMyTurn] = useState(true);
  const [position, setPosition] = useState("bigBlind");
  const [minBet, setMinBet] = useState(50);
  const [halfPot, setHalfPot] = useState(100);
  const [pot, setPot] = useState(200);
  const [allIn, setAllIn] = useState(1000);
  const [currentStack, setCurrentStack] = useState(1000);
  const [currentBet, setCurrentBet] = useState(minBet);

  return (
    <div className={styles.pokerActionsContaier}>
      <div className={styles.pokerActions}>
        <div className={styles.betBtns}>
          <Bets
            name="min"
            isMyTurn={isMyTurn}
            setIsMyTurn={setIsMyTurn}
            amount={minBet}
            setCurrentBet={setCurrentBet}
          />
          <Bets
            name="1/2 Pot"
            isMyTurn={isMyTurn}
            setIsMyTurn={setIsMyTurn}
            amount={halfPot}
            setCurrentBet={setCurrentBet}
          />
          <Bets
            name="Pot"
            isMyTurn={isMyTurn}
            setIsMyTurn={setIsMyTurn}
            amount={pot}
            setCurrentBet={setCurrentBet}
          />
          <Bets
            name="All in"
            isMyTurn={isMyTurn}
            setIsMyTurn={setIsMyTurn}
            amount={allIn}
            setCurrentBet={setCurrentBet}
          />
          <BetInput
            isMyTurn={isMyTurn}
            currentBet={currentBet}
            setCurrentBet={setCurrentBet}
            minBet={minBet}
            allIn={allIn}
          />
        </div>
        <div className={styles.actionBtns}>
          <Button action="Fold" isMyTurn={isMyTurn} setIsMyTurn={setIsMyTurn} />
          <Button action="Call" isMyTurn={isMyTurn} setIsMyTurn={setIsMyTurn} />
          <Button
            action="Raise"
            isMyTurn={isMyTurn}
            setIsMyTurn={setIsMyTurn}
          />
        </div>
      </div>
    </div>
  );
};

export default PokerActions;
