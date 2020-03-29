import React, { useState } from "react";
import styles from "pages/play/components/table/pokerTable.module.css";
import TableCards from "pages/play/components/table/tableCards";
import Player from "pages/play/components/table/player";

const PokerTable = () => {
  const [players, setPlayers] = useState([
    [
      "Pamela",
      "./yay.jpg",
      1,
      20.55,
      0.0,
      [
        ["A", "HEART"],
        ["A", "HEART"]
      ],
      false,
      false,
      false,
      false,
      false
    ],
    [
      "David",
      "./yay2.jpg",
      2,
      20.0,
      2.0,
      [
        ["2", "SPADE"],
        ["Q", "HEART"]
      ],
      true,
      false,
      true,
      false,
      false
    ],
    [
      "Lance",
      "./yay3.jpg",
      3,
      10.0,
      1.25,
      [
        ["A", "CLUB"],
        ["6", "HEART"]
      ],
      true,
      true,
      false,
      true,
      false
    ],
    [
      "Peter",
      "./yay4.jpg",
      4,
      25.0,
      1.25,
      [
        ["K", "DIAMOND"],
        ["8", "SPADE"]
      ],
      true,
      false,
      false,
      false,
      true
    ],
    [
      "Joe",
      "./yay5.jpg",
      5,
      10.0,
      1.25,
      [
        ["J", "CLUB"],
        ["4", "CLUB"]
      ],
      true,
      false,
      false,
      false,
      false
    ],
    [
      "Anthony",
      "./yay6.jpg",
      6,
      20.0,
      1.25,
      [
        ["J", "SPADE"],
        ["A", "HEART"]
      ],
      true,
      false,
      false,
      false,
      false
    ],
    [
      "Carmen",
      "./yay7.jpg",
      7,
      20.0,
      1.25,
      [
        ["9", "DIAMOND"],
        ["10", "DIAMOND"]
      ],
      true,
      false,
      false,
      false,
      false
    ],
    [
      "Yaslin",
      "./yay8.jpg",
      8,
      10.0,
      1.25,
      [
        ["5", "HEART"],
        ["5", "CLUB"]
      ],
      true,
      false,
      false,
      false,
      false
    ],
    [
      "Earl",
      "./yay9.jpg",
      9,
      20.0,
      0,
      [
        ["", ""],
        ["", ""]
      ],
      false,
      false,
      false,
      false,
      false
    ]
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
            bet={player[4]}
            cardSet={player[5]}
            showHand={player[6]}
            myTurn={player[7]}
            isDealer={player[8]}
            isSmallBlind={player[9]}
            isBigBlind={player[10]}
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
