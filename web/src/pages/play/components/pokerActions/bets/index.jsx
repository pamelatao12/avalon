import React from "react";
import styles from "./styles.module.scss";

const Bets = ({ name }) => {
  return (
    <button className={styles.amountBtn}>
      <span>{name}</span>
    </button>
  );
};

export default Bets;
