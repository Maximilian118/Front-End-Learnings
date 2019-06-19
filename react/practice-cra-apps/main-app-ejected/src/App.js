import React, {Component} from 'react';
// with CRA ejected and CSS Modules: true, we can now name import our CSS stylesheet
// and access each class with dot syntax.
import styles from './scss/app.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let butColour = 'butColour';
    if (this.state.showPeople) {
      // instead of displaying every <Person /> one bye one, use map.
      // i = index. i will assign a unique number to each iteration of the loop.
      // allowing us to differentiate each person in the deletePeople function.
      display = (
        <div>
          {this.state.people.map((person, i) => {
            // This <Person /> component has been wrapped in an <ErrorBoundary> component.
            // This is how ErrorBoundary's are implemented on a certain component.
            return <ErrorBoundary>
              <Person
              key={person.id}
              delete={() => this.deletePeople(i)}
              name={person.name} 
              age={person.age}
              change={event => this.changeNameHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      );
      butColour = null;
    }

    return (
      <div className={styles.App}>
        <h1>I'm a React App</h1>
        <button className={styles.butColour} onClick={this.togglePeopleHandler}><h3>Toggle People</h3></button>
        {display}
      </div>
    );
  };
};

export default App;