import React from 'react';

import headshot from '../assets/headshot.jpg'

import { Button } from '@material-ui/core'

const Welcome = ({props, history}) =>  {

    return(
      <div>
        <h2>Hi, I'm Baylie</h2>
        <img src={headshot} alt="headshot" />
        <p>Full Stack React &amp; Node.JS Developer</p>
        <p>Welcome to my site.</p>
        <div>
        <Button fullWidth variant="contained" color="secondary" onClick={() => history.push('/work')}>Check out my work</Button>
        </div>
      </div>
    )

}

export default Welcome;