import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import NotFound from './components/NotFound';
import DenNote from './components/DenNote';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DenNote} />
        <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App
