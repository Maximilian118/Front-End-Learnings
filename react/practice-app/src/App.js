import React, {Component} from 'react';
import './App.css';

// Child stateless components
import People from './People_UserInput/People';
import Pokemon from './Pokemon_UserOutput/Pokemon';

// A class based statefull component 
class App extends Component {
  state = {
    trainers: [
      {name: 'Max', pokemon: 'Pikachu'},
      {name: 'Luke', pokemon: 'Snorlax'},
      {name: 'Anna', pokemon: 'Jugglypuff'}
    ]
  }

  massPokemonChangeHandler = (pokemon1, pokemon2, pokemon3) => {
    this.setState({trainers: [
      {name: 'Max', pokemon: pokemon1},
      {name: 'Luke', pokemon: pokemon2},
      {name: 'Anna', pokemon: pokemon3}
    ]})
  }

  trainerChangeHandler = event => {
    this.setState({trainers: [
      {name: event.target.value, pokemon: 'Pikachu'},
      {name: 'Luke', pokemon: 'Snorlax'},
      {name: 'Anna', pokemon: 'Jugglypuff'}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Trainers and their Pokemon!</h1>
        <button onClick={this.massPokemonChangeHandler.bind(this, 'Eevee', 'Charmander', 'Mew')}>Change All Pokemon!</button>
        <People 
          changed={this.trainerChangeHandler} 
          currentName={this.state.trainers[0].name}/>
        <Pokemon 
          name={this.state.trainers[0].name} 
          pokemon={this.state.trainers[0].pokemon}/>
        <Pokemon 
          name={this.state.trainers[1].name} 
          pokemon={this.state.trainers[1].pokemon}/>
        <Pokemon 
          name={this.state.trainers[2].name} 
          pokemon={this.state.trainers[2].pokemon}/>
      </div>
    )
  }
}

export default App;
