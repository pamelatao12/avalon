import React from "react";
import "./pokerTable.css";
import TableCards from "./tableCards";
import Player from "./player";

const PokerTable = () => {
  return (
    <>
      <div className="players">
        <Player />
      </div>
      <div className="table">
        <TableCards />
      </div>
    </>
  );
};

export default PokerTable;
