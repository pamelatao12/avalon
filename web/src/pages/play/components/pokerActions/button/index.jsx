import React from "react";
import styles from "./styles.module.scss";

const Button = ({ action, isMyTurn, setIsMyTurn }) => {
  const disabled = isMyTurn ? "" : "disabled";

  return (
    <button
      className={[
        styles[`${action.toLowerCase()}`],
        styles[`${disabled}`]
      ].join(" ")}
      disabled={!isMyTurn}
      onClick={() => setIsMyTurn(false)}
    >
      <span>{action}</span>
    </button>
  );
};

export default Button;
