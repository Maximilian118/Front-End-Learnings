const redux = require('redux');
const createStore = redux.createStore;

// Dispatching Action >>> Reducers >>> Store >>> Subscription

const initialState = {
  counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
  // console.log(state, action)
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(reducer);
// console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[subscription]', store.getState());
})

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
// setTimeout(() => console.log(store.getState()), 100);