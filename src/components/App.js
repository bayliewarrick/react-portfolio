import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import Welcome from '../pages/Welcome'
import Work from '../pages/Work'

import Navbar from './NavigationBar'

import PageShell from '../pages/PageShell'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={PageShell(Welcome)}></Route>
        <Route path="/work" exact component={PageShell(Work)}></Route>
      </div>
    );
  }
}

export default App;
