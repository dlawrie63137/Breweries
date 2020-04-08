import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './containers/Layout/Layout';
import Contact from './containers/Contact/Contact';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/contact" component={Contact} />
        </Switch>
    </BrowserRouter>
    );
  };
};

export default App;
