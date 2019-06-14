import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// This is a class-based component.
// This is a statefull component. Notice there are 'setState' methods here.
class App extends Component {
  state = {
    people: [
      {name: 'Max', age: 25},
      {name: 'Sam', age: 27},
      {name: 'Anna', age: 22}
    ],
    anotherState: 'This will not change when switchNameHandler is fired',
    showPeople: false
  };

  // Switch showPeople between truthy and falsy.
  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow})
  };

  render() {
    let display = null;
    // instead of displaying every <Person /> one bye one, use map.
    if (this.state.showPeople) {
      display = (
        <div>
          {this.state.people.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button onClick={this.togglePeopleHandler}>Toggle People</button>
        {display}
      </div>
    );
  };
}

export default App;