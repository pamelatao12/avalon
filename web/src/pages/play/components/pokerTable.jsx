import React from "react";
import styles from "./pokerTable.module.css";
import TableCards from "./tableCards";
import Player from "./player";

const PokerTable = () => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.players}>
        <Player name="Pamela" pic="./yay.jpg" />
      </div>
      <div className={styles.table}>
        <TableCards />
      </div>
    </div>
  );
};

export default PokerTable;
