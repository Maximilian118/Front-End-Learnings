import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// This is a class-based component.
// This is a statefull component. Notice there are 'setState' methods here.
class App extends Component {
  state = {
    people: [
      {id: 'jbk', name: 'Max', age: 25},
      {id: '234', name: 'Sam', age: 27},
      {id: '4hb', name: 'Anna', age: 22},
      {id: 'jn3', name: 'Jake', age: 25},
      {id: 'lk9', name: 'Brad', age: 26}
    ],
    anotherState: 'This will not change when switchNameHandler is fired',
    showPeople: false
  };

  changeNameHandler = (event, id) => {
    // Find map iteration index by id.
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    // Extract .name from person and set it equal to user input.
    const person = {...this.state.people[personIndex]}
    person.name = event.target.value;
    // Extract original arr, find the correlating object and set it equal to person (user input).
    const people = [...this.state.people];
    people[personIndex] = person;
    // Update state 
    this.setState({people: people});
  };

  // Delete an item from the people array in an immutable fashion.
  // I.E in a way that doesn't directly change the data in state = {}.
  deletePeople = i => {
    const people = [...this.state.people]
    people.splice(i, 1);
    this.setState({people: people});
  };

  // Switch showPeople between truthy and falsy.
  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  };

  render() {
    let display = null;
    // instead of displaying every <Person /> one bye one, use map.
    // i = index. i will assign a unique number to each iteration of the loop.
    // allowing us to differentiate each person in the deletePeople function.
    if (this.state.showPeople) {
      display = (
        <div>
          {this.state.people.map((person, i) => {
            return <Person
              delete={() => this.deletePeople(i)}
              name={person.name} 
              age={person.age}
              key={person.id}
              change={event => this.changeNameHandler(event, person.id)} />
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button onClick={this.togglePeopleHandler}>Toggle People</button>
        {display}
      </div>
    );
  };
};

export default App;