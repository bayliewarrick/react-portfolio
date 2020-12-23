import React, { Component } from 'react';

import headshot from '../assets/headshot.jpg'

class ThankYou extends Component {
  render() {
    return(
      <div>
        <h2>Hi, I'm Baylie</h2>
        <img src={headshot} alt="Photo of me" />
        <p>Full Stack React &amp; Node.JS Developer</p>
        <p>Welcome to my site.</p>
      </div>
    )
  }
}

export default ThankYou;