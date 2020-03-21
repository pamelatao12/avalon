import React from "react";
import "pages/play/components/table/pokerTable.module.css";
import TableCards from "pages/play/components/table/tableCards";
import Player from "pages/play/components/table/player";

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
