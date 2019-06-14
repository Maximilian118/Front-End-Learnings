import React from 'react';
import './scss/People.css';

// UserInput
const people = props => {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.currentName}/>
    </div>
  )
}

export default people;