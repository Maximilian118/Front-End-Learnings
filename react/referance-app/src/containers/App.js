import React, {PureComponent} from 'react';
import './scss/App.css';
// Components
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
// Higher Order Components
import WithClass from '../hoc/WithClass';
// Context
import AuthContext from '../context/auth-context';

// This is a class-based component.
// This is also a statefull component. Notice there are 'setState' methods here.
// A PureComponent is exactly the same as Component except that it handles 
// the shouldComponentUpdate method for you.
class App extends PureComponent {
  state = {
    people: [
      {id: 'jbk', name: 'Max', age: 25},
      {id: '234', name: 'Sam', age: 27},
      {id: '4hb', name: 'Anna', age: 22},
      {id: 'jn3', name: 'Jake', age: 25},
      {id: 'lk9', name: 'Brad', age: 26}
    ],
    anotherState: 'This will not change when switchNameHandler is fired',
    showPeople: false,
    isLoggedIn: false
  };

  loggedInHandler = () => {
    const click = this.state.isLoggedIn;
    this.setState({isLoggedIn: !click});
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

    // this.function syntax is only referencing the function. Therefore the params 
    // passed are still within the function object.
    return (
      <AuthContext.Provider value={{
        authenticated: this.state.isLoggedIn,
        login: this.loggedInHandler}}>
        <WithClass classes="App">
          <Cockpit
            title={this.props.title}
            buttonColour={this.state.showPeople} 
            togglePeople={this.togglePeopleHandler}
            loggedIn={this.state.isLoggedIn}/>
          {display}
        </WithClass>
      </AuthContext.Provider>
    );
  };
};

export default App;

// Notes:
//
// setState is a synchronous function meaning the is an incorrect use case for it.
// Because it's synchronous, setState isn't guaranteed to take effect immediately as
// other synchronous functions might already be in the call stack. Naturally, this
// delay in execution will be more prominent with larger applications.
//
// For simply updating a component it's perfect in any case. However, for time sensitive
// code like a timer for example, you must include an optional callback function
// effectively turning setState into an asynchronous function. Syntax:
//
//  this.setState((prevState, props) => {
//    return {
//      objName: objName,
//      changeCounter: prevState.changeCounter + 1    
//    };
//  });