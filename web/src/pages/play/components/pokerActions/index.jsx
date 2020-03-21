import React from "react";
import styles from "./styles.module.scss";
import Button from "./button";

const PokerActions = () => {
  return (
    <div>
      <Button action="Fold" />
      <Button action="Call" />
      <Button action="Raise" />
    </div>
  );
};

export default PokerActions;
