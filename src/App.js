import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Home from './pages/Home';
import Ships from './pages/Ships';
import ShipDetail from './pages/ShipDetail';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ships">
          <Ships />
        </Route>
        <Route path="/ship/:id">
          <ShipDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
