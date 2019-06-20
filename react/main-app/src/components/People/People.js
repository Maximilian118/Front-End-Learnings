import React, {useEffect} from 'react';
import Person from './Person/Person'

// instead of displaying every <Person /> one bye one, use map.
// i = index. i will assign a unique number to each iteration of the loop.
// allowing us to differentiate each person in the deletePeople function.
const People = props => { 
  useEffect(() => {
    console.log('[Person.js] was executed')
  }, [props.people]);
  
  props.people.map((person, i) => {
  return <Person
    delete={() => props.deleted(i)}
    name={person.name} 
    age={person.age}
    key={person.id}
    change={event => props.changed(event, person.id)} />
  });
}

export default People;