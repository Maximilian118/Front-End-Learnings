import * as actionType from '../actions/actionTypes'
import { updateState } from '../utility'

// It's opinionative whether the bulk of the logic for the application should be in
// our Action Creators or our Reducers. Reducers are a core Redux concept and cannot
// execute asynchronous code where as Action Creators can. It is important that we
// do decide where we'd like to put the bulk of our logic rather than spreading it
// across both as to not cause confusion. I am of the opinion that logic should be in
// our reducers and only when we need asynchronous capabilities, we use Action Creators.

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return updateState(state, { counter: state.counter + 1 })
    case actionType.DECREMENT:
      return updateState(state, { counter: state.counter - 1 })
    case actionType.ADD:
      return updateState(state, { counter: state.counter + action.val })
    case actionType.SUBTRACT:
      return updateState(state, { counter: state.counter - action.val })
    default:
      return state
  }
}

export default counterReducer
