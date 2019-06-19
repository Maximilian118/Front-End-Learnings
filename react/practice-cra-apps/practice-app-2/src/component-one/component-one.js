import React from 'react';
import './scss/style.css'

const cars = props => {
  return (
  <div className="cars">
    <input type="text" onChange={props.change} value={props.owner}/>
    <h4 onClick={props.click}>I'm {props.owner}, I have a {props.manufacturer} and it has {props.miles} miles</h4>
  </div>
  )
};

export default cars;