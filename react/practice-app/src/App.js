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
    ],
    showPokemon: false,
    showPeople: false
  }

  massPokemonChangeHandler = (pokemon1, pokemon2, pokemon3) => {
    this.setState({trainers: [
      {name: 'Max', pokemon: pokemon1},
      {name: 'Luke', pokemon: pokemon2},
      {name: 'Anna', pokemon: pokemon3}
    ]})
  }

  showPokemonHandler = () => {
    const doesShow = this.state.showPokemon;
    this.setState({showPokemon: !doesShow})
  }

  showPeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow})
  }

  render() {
    let pokemon = null;
    if (this.state.showPokemon) {
      pokemon = (
      <div>
        <Pokemon pokemon={this.state.trainers[0].pokemon}/>
        <Pokemon pokemon={this.state.trainers[1].pokemon}/>
        <Pokemon pokemon={this.state.trainers[2].pokemon}/>
      </div>
      );
    }

    let people = null;
    if (this.state.showPeople) {
      people = (
      <div>
        <People name={this.state.trainers[0].name}/>
        <People name={this.state.trainers[1].name}/>
        <People name={this.state.trainers[2].name}/>
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Trainers and their Pokemon!</h1>
        <button onClick={this.showPeopleHandler}>Show People!</button>
        <button onClick={this.massPokemonChangeHandler.bind(this, 'Eevee', 'Charmander', 'Mew')}>Change All Pokemon!</button>
        <button onClick={this.showPokemonHandler}>Show Pokemon!</button>
        {people}
        {pokemon}
      </div>
    )
  }
}

export default App;
