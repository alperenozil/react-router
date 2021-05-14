import './App.css';
import Shop from './Shop';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:id" component={Shop}>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
