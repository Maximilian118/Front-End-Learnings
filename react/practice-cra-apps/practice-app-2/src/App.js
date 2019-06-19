import React, {Component} from 'react';
import './scss/style.css';
import Comp from './component-one/component-one'

class App extends Component {
  state = {
    cars: [
      {id: '3456', name: 'Lisa', manufacturer: 'Ford', miles: 19000},
      {id: '2ddg', name: 'Phil', manufacturer: 'Ferrari', miles: 34000},
      {id: '34ge', name: 'Rico', manufacturer: 'Toyota', miles: 45000},
      {id: '45hs', name: 'Tarzan', manufacturer: 'Nissan', miles: 1000},
      {id: '4ddf', name: 'Jane', manufacturer: 'Citron', miles: 25000},
      {id: '4gsf', name: 'Ralph', manufacturer: 'BMW', miles: 56000},
      {id: '33gh', name: 'Homer', manufacturer: 'Audi', miles: 103000}
    ],
    showCars: false
  };

  deleteHandler = i => {
    const delCars = [...this.state.cars]
    delCars.splice(i, 1);
    this.setState({cars: delCars});
  }

  toggleHandler = () => {
    console.log(this.state.cars)
    const show = this.state.showCars;
    this.setState({showCars: !show})
    if (this.state.cars.length < 7) {
      this.setState({cars: this.state.cars})
    }
  };

  driverChangeHandler = (event, id) => {
    const driver = this.state.cars.findIndex(d => {
      return d.id === id;
    })
    const name = {...this.state.cars[driver]};
    name.name = event.target.value;

    const original = [...this.state.cars];
    original[driver] = name;
    
    this.setState({cars: original});
  }
 
  render() {
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <div>
          {this.state.cars.map((cars, i) => {
            return <Comp
            key={cars.id}
            owner={cars.name} 
            manufacturer={cars.manufacturer} 
            miles={cars.miles}
            click={() => this.deleteHandler(i)}
            change={event => this.driverChangeHandler(event, cars.id)}/>
          })}
        </div>
      )
    } 

    return (
      <div className="grid">
        <header>
          <h4>I am the 2nd React practice app</h4>
        </header>
        <sidebar-l></sidebar-l>
        <main>
          <button onClick={this.toggleHandler}>Show/Hide</button>
          {cars}
        </main>
        <sidebar-r></sidebar-r>
        <footer>
          <h3>This is a footer</h3>
        </footer>
      </div>
    );
  }
}

export default App;
