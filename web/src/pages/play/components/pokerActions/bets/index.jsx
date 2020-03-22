import React from "react";
import styles from "./styles.module.scss";

const Bets = ({ name, isMyTurn, setIsMyTurn }) => {
  const disabled = isMyTurn ? "" : "disabled";

  return (
    <button
      className={[styles.amountBtn, styles[`${disabled}`]].join(" ")}
      disabled={!isMyTurn}
      onClick={() => setIsMyTurn(false)}
    >
      <span>{name}</span>
    </button>
  );
};

export default Bets;
