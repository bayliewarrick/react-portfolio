import React, { Component } from 'react';
import SubscribeForm from '../components/SubscribeForm';
class Subscribe extends Component {
  render() {
    return(
      <div>
        <h2>Hi, I'm Baylie</h2>
        <p>Full Stack React &amp; Node.JS Developer</p>
        <p>Welcome to my site.</p>
        <SubscribeForm {...this.props} />
      </div>
    )
  }
}

export default Subscribe;