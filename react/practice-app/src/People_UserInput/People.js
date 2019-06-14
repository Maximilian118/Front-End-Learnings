import React from 'react';
import './scss/People.css';

// UserInput
const people = props => {
  return (
    <div className="people">
      <p>I'm {props.name}</p>
    </div>
  )
}

export default people;