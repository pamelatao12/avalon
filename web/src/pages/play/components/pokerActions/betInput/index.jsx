import React from "react";
import styles from "./styles.module.scss";

const BetInput = ({ isMyTurn, setIsMyTurn }) => {
  return (
    <form className={styles.betInputContainer}>
      <label>
        <input
          className={styles.betInput}
          type="number"
          disabled={!isMyTurn}
          onClick={() => setIsMyTurn(false)}
        />
      </label>
    </form>
  );
};

export default BetInput;
