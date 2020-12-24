import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import Welcome from '../pages/Welcome'
import Work from '../pages/Work'

import Navbar from './NavigationBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/work" exact component={Work}></Route>
      </div>
    );
  }
}

export default App;
