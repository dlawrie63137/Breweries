import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './containers/Layout/Layout';
import Contact from './containers/Contact/Contact';
import Search from './containers/Search/Search';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/contact" component={Contact} />
            <Route path="/find" component={Search} />
        </Switch>
    </BrowserRouter>
    );
  };
};

export default App;
