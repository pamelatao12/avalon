import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "./button";
import Bets from "./bets";
import BetInput from "./betInput";

const PokerActions = () => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={styles.pokerActions}>
      <div className="betBtns">
        <Bets name="min" />
        <Bets name="1/2 Pot" />
        <Bets name="Pot" />
        <Bets name="All in" />
        <BetInput />
      </div>
      <div className="actionBtns">
        <Button action="Fold" />
        <Button action="Call" />
        <Button action="Raise" />
      </div>
    </div>
  );
};

export default PokerActions;
