import React from "react";
import PokerTable from "./pokerTable";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignedOutPage from "./pages/signedOut";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/play" component={PokerTable} />
        <Route path="*" component={SignedOutPage} />
      </Switch>
    </Router>
  );
};

export default App;
