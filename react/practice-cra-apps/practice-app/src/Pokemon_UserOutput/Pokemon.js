import React from 'react';
import './scss/Pokemon.css';

// UserOutput
const pokemon = props => {
  return (
    <div className="pokemon">
      <p>and my Pokemon is called {props.pokemon}!</p>
    </div>
  )
}

export default pokemon;