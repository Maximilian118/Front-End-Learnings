import React from 'react';
import './scss/Cockpit.css'

const cockpit = props => {
  let buttonColour = 'buttonColour';
  if (props.buttonColour) {
    buttonColour = null;
  }
  
  return (
    <div>
      <h1>I'm a React App</h1>
      <button className={buttonColour} onClick={props.togglePeople}><h3>Toggle People</h3></button>
    </div>
  )
};

export default cockpit;