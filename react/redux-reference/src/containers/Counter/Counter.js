import React from 'react'
import { connect } from 'react-redux'
import * as ActionCreators from '../../store/actions/actionsIndex'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

const Counter = props => (
  <div>
    <CounterOutput value={props.counter} />
    <CounterControl label='Increment' clicked={props.onIncrementCounter} />
    <CounterControl label='Decrement' clicked={props.onDecrementCounter} />
    <CounterControl label='Add 5' clicked={props.onAddCounter} />
    <CounterControl label='Subtract 5' clicked={props.onSubtractCounter} />
    <hr />
    <button onClick={() => props.onStoreResult(props.counter)}>Store Result</button>
    <ul>
      {props.storedResults.map(res => {
        console.log(res)
        return (
          <li key={res.id} onClick={() => props.onDelete(res.id)}>
            {res.value}
          </li>
        )
      })}
    </ul>
  </div>
)

// These are two common functions that configure what information we need for our Component.
// Both of these functions are passed to connect which then translates what they return
// into props for our Component.

// This function receives state data.
const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results
  }
}

// This function returns functions that call dispatch which sends data to the reducer.
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(ActionCreators.increment()),
    onDecrementCounter: () => dispatch(ActionCreators.decrement()),
    onAddCounter: () => dispatch(ActionCreators.add(5)),
    onSubtractCounter: () => dispatch(ActionCreators.subtract(5)),
    // As we have two reducers both with their own state slices, they cannot access each others
    // state directly. However, as our Component has access to both reducers and therefore both
    // states, we can pass information via dispatches.
    onStoreResult: result => dispatch(ActionCreators.store(result)),
    onDelete: id => dispatch(ActionCreators.del(id))
  }
}

// React-redux supplies the connect function. This function allows us to use redux with
// react.

// First arguments are functions that allow us to talk with redux.
// Second argument is the Component we're targeting.
// prettier-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// If a component doesn't need to access state but does need to dispatch actions:
// connect(null, mapDispatchToProps)(Counter)
