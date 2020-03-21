import React from "react";
import "pages/play/components/table/pokerTable.css";
import TableCards from "pages/play/components/table/tableCards";
import Player from "pages/play/components/table/player";

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
