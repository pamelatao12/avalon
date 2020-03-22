import React from "react";
import styles from "./styles.module.scss";

const BetInput = () => {
  return (
    <form className={styles.betInputContainer}>
      <label>
        <input className={styles.betInput} type="number" />
      </label>
    </form>
  );
};

export default BetInput;
