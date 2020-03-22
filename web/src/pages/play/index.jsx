import React, { useContext } from "react";
import { Redirect } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';
import PokerTable from "pages/play/components/table/pokerTable";
import PokerActions from "pages/play/components/pokerActions";

const PlayPage = () => {
  // const firebase = useContext(FirebaseContext);
  // const user = firebase.auth.currentUser;

  //  if (!user) {
  //    alert('Please log in plebeian');
  //    return <Redirect to="/" />
  //  }

  return (
    <div>
      <PokerTable />
      <PokerActions />
    </div>
  );
};

export default PlayPage;
