import React, {Component} from 'react';
import './scss/App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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
    // Extract .name from person obj and set it equal to user input.
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
    if (this.state.showPeople) {
      display = <People 
        people={this.state.people}
        deleted={this.deletePeople} 
        changed={this.changeNameHandler}/>
    }

    // this.function is only referencing the function. Therefore the params passed are
    // still within the function object.
    return (
      <div className="App">
        <Cockpit
          title={this.props.title}
          buttonColour={this.state.showPeople} 
          togglePeople={this.togglePeopleHandler}/>
        {display}
      </div>
    );
  };
};

export default App;