import React, {useEffect, useContext} from 'react';
import './scss/Person.css'
// Packages.
import PropTypes from 'prop-types';
// Higher Order Functions.
import WithClass from '../../../hoc/WithClass'
// Context
import AuthContext from '../../../context/auth-context'

// This is a stateless component. Notice no 'useState' or 'setState'.
const Person = props => {
  // After creating and exporting our context in auth-context.js we can now use it
  // in any functional component by importing the hook useContext(), using it here
  // and assigning the context we wish to access to a variable.
  const authContext = useContext(AuthContext);

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
      <input
        type="text" 
        onChange={props.change} 
        value={isGay(props.name)}/>
      <h4 onClick={props.delete}>I am {isGay(props.name)} and I am {props.age} {multiple(props.children)}</h4>
      {authContext.authenticated ? <h6>Logged In!</h6> : <h6>Please Log In.</h6>}
    </WithClass>
  );
};

// When incorrect data types are passed into our props, throw an error.
Person.propTypes = {
  delete: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default Person;