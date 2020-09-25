import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { About } from './About';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
