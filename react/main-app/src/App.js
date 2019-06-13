import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

// This is a class-based component.
// This is a statefull component. Notice there are 'setState' methods here.
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 25},
      {name: 'Sam', age: 27},
      {name: 'Anna', age: 22}
    ],
    anotherState: 'This will not change when switchNameHandler is fired'
  };

  switchNameHandler = (p1, p2, p3) => {
    this.setState({persons: [
      {name: p1, age: 25},
      {name: p2, age: 27},
      {name: p3, age: 98}
    ]});
  };

  nameChangedHandler = event => {
    this.setState({persons: [
      {name: 'Max', age: 25},
      {name: event.target.value, age: 27},
      {name: 'Anna', age: 98}
    ]});
  };

  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian', 'Samuel', 'Spanna')}>Switch People</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maximilian', 'Sam', 'Anna')}>Racing guitar coffee</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max', 'Samuel', 'Anna')}
          changed={this.nameChangedHandler}>Music</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.switchNameHandler.bind(this, 'Max', 'Sam', 'Spanna')} />
      </div>
    );
  };
}

export default App;

// OLD syntax:
// return React.createElement('div', {className: App}, React.createElement('h1', null, 'This is the non JSX way of creating components'))