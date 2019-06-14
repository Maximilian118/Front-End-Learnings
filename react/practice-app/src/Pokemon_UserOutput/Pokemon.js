import React from 'react';
import './scss/Pokemon.css';

// UserOutput
const pokemon = props => {
  return (
    <div className="pokemon">
      <p>I am {props.name}!</p>
      <p>My Pokemon is called {props.pokemon}!</p>
    </div>
  )
}

export default pokemon;