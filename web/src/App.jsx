import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase/app";
import SignedOutPage from "pages/signedOut";
import PlayPage from "pages/play";
import PokerActions from "pages/play/components/pokerActions";

const App = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: `${process.env.REACT_APP_FIREBASE_APP_NAME}.firebaseapp.com`,
    databaseURL: `https://${process.env.REACT_APP_FIREBASE_APP_NAME}.firebaseio.com`,
    projectId: `${process.env.REACT_APP_FIREBASE_APP_NAME}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_APP_NAME}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

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
