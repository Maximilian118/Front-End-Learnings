import React, {useEffect, Fragment} from 'react';
import './scss/Cockpit.css'
// Packages
import PropTypes from 'prop-types';

const Cockpit = props => {
  // useEffect is basically a replacement for Class component lifecycle hooks.
  // 2nd argument = target of useEffect().
  // [] empty array = only run once.
  useEffect(() => {
    console.log('[Cockpit.js] Button rendered')
  }, [props.buttonColour]);

  let buttonColour = 'buttonColour';
  if (props.buttonColour) {
    buttonColour = null;
  }

  // You don't have to return a single top level / container element with JSX.
  // Instead, return an array of elements. Now we don't need an empty wrapping <div>.
  // NOTE: This method does require that each top level element has a unique key.
  // return [
  //   <h1 key="e1">{props.title}</h1>,
  //   <button key="e2" className={buttonColour} onClick={props.togglePeople}><h3>Toggle People</h3></button>
  // ]

  // Alternatively, React has a built in method to solve this problem.
  // Simply import and wrap your JSX with <Fragment>. <Fragment> does not render to the DOM.
    return (
      <Fragment>
        <h1>{props.title}</h1>,
        <button className={buttonColour} onClick={props.togglePeople}><h3>Toggle People</h3></button>
      </Fragment>
    )
};

// When incorrect data types are passed into our props, throw an error.
Cockpit.propTypes = {
  title: PropTypes.string,
  buttonColour: PropTypes.bool,
  togglePeople: PropTypes.func
}

export default Cockpit;