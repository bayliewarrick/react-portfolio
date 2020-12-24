import React from 'react';

import headshot from '../assets/headshot.jpg'

import Navbar from '../components/NavigationBar'

const Welcome = ({props, history}) =>  {

    return(
      <div>
        <h2>Hi, I'm Baylie</h2>
        <img src={headshot} alt="headshot" />
        <p>Full Stack React &amp; Node.JS Developer</p>
        <p>Welcome to my site.</p>
        <div className="form">
        <button onClick={() => history.push('/work')} title="hello">Check out my work</button>
        </div>
      </div>
    )

}

export default Welcome;