import React, { useState } from "react";
import styles from "pages/play/components/table/pokerTable.module.css";
import TableCards from "pages/play/components/table/tableCards";
import Player from "pages/play/components/table/player";

const PokerTable = () => {
  const [players, setPlayers] = useState([
    ["Pamela", "./yay.jpg", 1],
    ["David", "./yay2.jpg", 2],
    ["Lance", "./yay3.jpg", 3],
    ["Peter", "./yay4.jpg", 4],
    ["Joe", "./yay5.jpg", 5],
    ["Anthony", "./yay6.jpg", 6],
    ["Carmen", "./yay7.jpg", 7],
    ["PlayerX", "./yay8.jpg", 8],
    ["PlayerY", "./yay9.jpg", 9]
  ]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.players}>
        {players.map((player, i) => (
          <Player
            name={player[0]}
            pic={player[1]}
            position={player[2]}
            key={i}
          />
        ))}
      </div>
      <div className={styles.table}>
        <TableCards />
      </div>
    </div>
  );
};

export default PokerTable;
