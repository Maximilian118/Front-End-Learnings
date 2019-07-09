import * as actionType from '../actions/actionTypes'
import { updateState } from '../utility'

// It's opinionative whether the bulk of the logic for the application should be in
// our Action Creators or our Reducers. Reducers are a core Redux concept and cannot
// execute asynchronous code where as Action Creators can. It is important that we
// do decide where we'd like to put the bulk of our logic rather than spreading it
// across both as to not cause confusion. I am of the opinion that logic should be in
// our reducers and only when we need asynchronous capabilities, we use Action Creators.

const initialState = {
  results: []
}

const delResult = (state, action) => {
  const newArr = state.results.filter(res => res.id !== action.resultID)
  return updateState(state, { results: newArr })
}

// Try and make our switch statement as lean and readable as possible.
// Outsource our logic to functions like delResult.
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE:
      return updateState(state, { results: state.results.concat({ id: new Date(), value: action.result }) })
    case actionType.DELETE:
      return delResult(state, action.resultID)
    default:
      return state
  }
}

export default resultReducer
