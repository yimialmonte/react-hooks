import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './About';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={LoginScreen}/>
        </Switch>
      </div>
    </Router>
  );
};
