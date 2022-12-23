import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
      </header>
    </div>
  );
}

function NoMatch() {
  return (
    <Route
      render={({ location }) => (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />)}
    />
  );
}

export default App;
