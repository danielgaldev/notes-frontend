import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import NotFound from './components/NotFound';
import DenNote from './components/DenNote';
import denApp from "./reducers";

let store = createStore(denApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DenNote} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
