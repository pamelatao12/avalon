import React from "react";
import styles from "./styles.module.scss";

const Button = ({ action }) => {
  return (
    <button className={styles[`${action.toLowerCase()}`]}>
      <span>{action}</span>
    </button>
  );
};

export default Button;
