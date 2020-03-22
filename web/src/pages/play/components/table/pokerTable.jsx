import React, { useState } from "react";
import styles from "pages/play/components/table/pokerTable.module.css";
import TableCards from "pages/play/components/table/tableCards";
import Player from "pages/play/components/table/player";

const PokerTable = () => {
  const [players, setPlayers] = useState([
    ["Pamela", "./yay.jpg", 1, [["", ""], ["", ""]]],
    ["David", "./yay2.jpg", 2, [["2", "SPADE"], ["Q", "HEART"]]],
    ["Lance", "./yay3.jpg", 3, [["A", "CLUB"], ["6", "HEART"]]],
    ["Peter", "./yay4.jpg", 4, [["K", "DIAMOND"], ["8", "SPADE"]]],
    ["Joe", "./yay5.jpg", 5, [["J", "CLUB"], ["4", "CLUB"]]],
    ["Anthony", "./yay6.jpg", 6, [["J", "SPADE"], ["A", "HEART"]]],
    ["Carmen", "./yay7.jpg", 7, [["9", "DIAMOND"], ["10", "DIAMOND"]]],
    ["Yaslin", "./yay8.jpg", 8, [["5", "HEART"], ["5", "CLUB"]]],
    ["Earl", "./yay9.jpg", 9, [["", ""], ["", ""]]]
  ]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.players}>
        {players.map((player, i) => (
          <Player
            name={player[0]}
            pic={player[1]}
            position={player[2]}
            cardSet={player[3]}
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
