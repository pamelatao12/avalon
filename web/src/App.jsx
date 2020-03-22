import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignedOutPage from "pages/signedOut";
import PlayPage from "pages/play";
import PokerActions from "pages/play/components/pokerActions";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/play">
          <PlayPage />
        </Route>

        <Route exact path="/poker-actions">
          <PokerActions />
        </Route>
        
        <Route path="*">
          <SignedOutPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
