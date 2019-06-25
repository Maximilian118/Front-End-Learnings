import React from 'react';
import classes from './scss/Buttons.module.css';
import WithClass from '../../../../hoc/WithClass';

const Buttons = props => (
  <WithClass classes={classes.Buttons}>
    <div className={classes.Label}>{props.label}</div>
    <button 
      onClick={props.removed} 
      className={classes.Less} 
      disabled={props.disabled}>Less</button>
    <button 
      onClick={props.added} 
      className={classes.More}>More</button>
  </WithClass>
);

export default Buttons;
