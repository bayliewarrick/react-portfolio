import React, { Component } from 'react';

const Work = ({props, history}) => {
console.log(history)
    return(
      <div>
        <h2>Hi, I'm Baylie</h2>
        <p>Full Stack React &amp; Node.JS Developer</p>
        <p>Welcome to my site.</p>
        <div className="form">
        <button onClick={() =>history.push('/')}>Go Home</button>
        </div>
      </div>
    )
  
}

export default Work;