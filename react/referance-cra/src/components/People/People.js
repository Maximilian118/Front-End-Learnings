import React, {useEffect} from 'react';
import Person from './Person/Person'
// Packages
import PropTypes from 'prop-types';

// instead of displaying every <Person /> one bye one, use map.
// i = index. i will assign a unique number to each iteration of the loop.
// allowing us to differentiate each person in the deletePeople function.
const People = props => { 
  useEffect(() => {
    console.log('[People.js] was rendered')
  }, [props.people]);
  
  return props.people.map((person, i) => <Person
    delete={() => props.deleted(i)}
    name={person.name} 
    age={person.age}
    key={person.id}
    change={event => props.changed(event, person.id)} />
  );
}

// When incorrect data types are passed into our props, throw an error.
People.propTypes = {
  people: PropTypes.array,
  deleted: PropTypes.func,
  changed: PropTypes.func
};

export default People;