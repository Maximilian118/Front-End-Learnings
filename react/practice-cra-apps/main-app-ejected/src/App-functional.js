import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

// This is a functional component.
// This is a statefull component. Notice there are 'useState' methods here.
const App = props => {
  const [ personsState, setPersonsState ] = useState({ // Will use this state at default.
    persons: [
      {name: 'Max', age: 25},
      {name: 'Sam', age: 27},
      {name: 'Anna', age: 22}
    ]
  });

  const [otherState] = useState('some other value'); // Another useState method.
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 25},
        {name: 'Samuel', age: 27},
        {name: 'Anna', age: 98}
      ],
      // Unlike class components, the line below will disappear on button click.
      // Must use multiple useState() to separate.
      // anotherState: personsState.anotherState
    });
  }

  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}>Switch Person</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Racing guitar coffee</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Music</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Emotional_Wreck</Person>
    </div>
  );
}

// export default App;

// OLD syntax:
// This is what the above return is actually doing with short hand.
// return React.createElement('div', {className: App}, React.createElement('h1', null, 'This is the non JSX way of creating components'))