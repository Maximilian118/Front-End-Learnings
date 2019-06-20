import React, {useEffect} from 'react';
import './scss/Person.css'
import WithClass from '../../../hoc/WithClass'

// This is a stateless component. Notice no 'useState' or 'setState'.
const Person = props => {
  useEffect(() => {
    console.log('[Person.js] A person was rendered')
  }, [props.children]);
  
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
    <WithClass classes="person">
      <input type="text" onChange={props.change} value={isGay(props.name)}/>
      <h4 onClick={props.delete}>I am {isGay(props.name)} and I am {props.age} {multiple(props.children)}</h4>
    </WithClass>
  );
}

export default Person;