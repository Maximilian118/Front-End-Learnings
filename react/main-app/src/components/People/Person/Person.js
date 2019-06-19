import React from 'react';
import './scss/Person.css'

// This is a stateless component. Notice no 'useState' or 'setState'.
const person = props => {
  const multiple = hobbies => {
    if (hobbies) {
      let arr = [];
      arr = hobbies.split(" ");
      if (arr.length === 1) {
        return `and my hobby is ${hobbies}`
      } else {
        return `and my hobbies are ${arr}`
      }
    }
  };

  const isGay = name => {
    if (name === 'Sam' || name === 'Samuel') {
      return `${name} is gay`
    } else {
      return props.name
    }
  };

  return (
    <div className="person">
      <input type="text" onChange={props.change} value={isGay(props.name)}/>
      <h4 onClick={props.delete}>I am {isGay(props.name)} and I am {props.age} {multiple(props.children)}</h4>
    </div>
  );
}

export default person;