import React from "react";
import PokerTable from "pages/play/components/table/pokerTable";
import PokerActions from "pages/play/components/pokerActions";

const PlayPage = () => {
  return (
    <div>
      <PokerTable />
      <PokerActions />
    </div>
  );
};

export default PlayPage;
