import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignedOutPage from "pages/signedOut";
import PlayPage from "pages/play";
import PokerActions from "pages/play/components/pokerActions";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/play" component={PlayPage} />
        <Route exact path="/poker-actions" component={PokerActions} />
        <Route path="*" component={SignedOutPage} />
      </Switch>
    </Router>
  );
};

export default App;
