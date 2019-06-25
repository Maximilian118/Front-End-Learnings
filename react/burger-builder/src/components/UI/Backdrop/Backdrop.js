import React from 'react';
import classes from './scss/Backdrop.module.css';
import WithClass from '../../../hoc/WithClass'

const backdrop = props => (
  props.show ? <WithClass classes={classes.Backdrop} onClick={props.clicked}/> : null
);

export default backdrop;