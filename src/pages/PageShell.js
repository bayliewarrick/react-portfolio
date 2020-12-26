import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import { Button } from '@material-ui/core'

const PageShell = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'SlideIn'}
      >
        <Page {...props} />
        <div id="buttons">
        {props.location.pathname !== '/' ? <Button fullWidth href="/" variant="outlined" color="secondary">Go Home</Button> : null }
        </div>
        </ReactCSSTransitionGroup>
    </div>;
};
export default PageShell;