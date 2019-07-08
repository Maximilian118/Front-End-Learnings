import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

const Counter = props => 
    <div>
        <CounterOutput value={props.counter} />
        <CounterControl label="Increment" clicked={props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
        <CounterControl label="Add 5" clicked={props.onAddCounter}  />
        <CounterControl label="Subtract 5" clicked={props.onSubtractCounter}  />
        <hr />
        <button onClick={() => props.onStoreResult(props.counter)}>Store Result</button>
        <ul>
            {props.storedResults.map(res => { 
                console.log(res) 
                return <li key={res.id} onClick={() => props.onDelete(res.id)}>{res.value}</li>})}
        </ul>
    </div>

// These are two common functions that configure what information we need for our Component.
// Both of these functions are passed to connect which then translates what they return
// into props for our Component.

// This function receives state data.
const mapStateToProps = state => {
    // console.log(state)
    return {
        counter: state.ctr.counter,
        storedResults: state.res.results
    };
};

// This function returns functions that call dispatch which sends data to the reducer.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT, payload: 1}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT, payload: 1}),
        onAddCounter: () => dispatch({type: actionType.ADD, payload: 5}),
        onSubtractCounter: () => dispatch({type: actionType.SUBTRACT, payload: 5}),
        // As we have two reducers both with their own state slices, they cannot access each others
        // state directly. However, as our Component has access to both reducers and therefore both
        // states, we can pass information via dispatches. 
        onStoreResult: result => dispatch({type: actionType.STORE, result: result}),
        onDelete: id => dispatch({type: actionType.DELETE, resultID: id}),
    };
};

// React-redux supplies the connect function. This function allows us to use redux with
// react. 

// First arguments are functions that allow us to talk with redux.
// Second argument is the Component we're targeting.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// If a component doesn't need to access state but does need to dispatch actions:
// connect(null, mapDispatchToProps)(Counter);