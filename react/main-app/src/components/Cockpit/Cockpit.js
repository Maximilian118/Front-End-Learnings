import React, {useEffect} from 'react';
import './scss/Cockpit.css'

const Cockpit = props => {
  // useEffect is basically a replacement for Class component lifecycle hooks.
  // 2nd argument = target of useEffect().
  // [] empty array = only run once.
  useEffect(() => {
    console.log('[Cockpit.js] button colour rendered')
  }, [props.buttonColour]);

  let buttonColour = 'buttonColour';
  if (props.buttonColour) {
    buttonColour = null;
  }
  
  return (
    <div>
      <h1>{props.title}</h1>
      <button className={buttonColour} onClick={props.togglePeople}><h3>Toggle People</h3></button>
    </div>
  )
};

export default Cockpit;