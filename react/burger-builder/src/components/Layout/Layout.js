import React, {Fragment} from 'react';
import classes from './scss/Layout.module.css'

const layout = props => (
  <Fragment>
    <div>
      toolbar, sidedrawer, backdrop
    </div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Fragment>
);

export default layout;