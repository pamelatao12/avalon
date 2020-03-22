import React, { useState } from "react";
import styles from "pages/play/components/table/pokerTable.module.css";
import TableCards from "pages/play/components/table/tableCards";
import Player from "pages/play/components/table/player";

const PokerTable = () => {
  const [players, setPlayers] = useState([
    ["Pamela", "./yay.jpg", 1, 20.55, [["", ""], ["", ""]], false],
    ["David", "./yay2.jpg", 2, 20.0, [["2", "SPADE"], ["Q", "HEART"]], true],
    ["Lance", "./yay3.jpg", 3, 10.0, [["A", "CLUB"], ["6", "HEART"]], true],
    ["Peter", "./yay4.jpg", 4, 25.0, [["K", "DIAMOND"], ["8", "SPADE"]], true],
    ["Joe", "./yay5.jpg", 5, 10.0, [["J", "CLUB"], ["4", "CLUB"]], true],
    ["Anthony", "./yay6.jpg", 6, 20.0, [["J", "SPADE"], ["A", "HEART"]], true],
    [
      "Carmen",
      "./yay7.jpg",
      7,
      20.0,
      [["9", "DIAMOND"], ["10", "DIAMOND"]],
      true
    ],
    ["Yaslin", "./yay8.jpg", 8, 10.0, [["5", "HEART"], ["5", "CLUB"]], true],
    ["Earl", "./yay9.jpg", 9, 20.0, [["", ""], ["", ""]], false]
  ]);

  const tableAmount = 50.25;
  // how to get total table amount?

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.players}>
        {players.map((player, i) => (
          <Player
            name={player[0]}
            pic={player[1]}
            position={player[2]}
            money={player[3]}
            cardSet={player[4]}
            showHand={player[5]}
            key={i}
          />
        ))}
      </div>
      <div className={styles.table}>
        <TableCards />
        <div className={styles.tableAmount}>
          <span>&#10050;</span>${tableAmount}
        </div>
      </div>
    </div>
  );
};

export default PokerTable;
