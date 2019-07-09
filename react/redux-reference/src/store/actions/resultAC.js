import * as actionTypes from './actionTypes'

// Action Creators
// They can be used to execute asynchronous code with the help of redux-thunk.
// Perfect for http requests.

// It's opinionative whether the bulk of the logic for the application should be in
// our Action Creators or our Reducers. Reducers are a core Redux concept and cannot
// execute asynchronous code where as Action Creators can. It is important that we
// do decide where we'd like to put the bulk of our logic rather than spreading it
// across both as to not cause confusion. I am of the opinion that logic should be in
// our reducers and only when we need asynchronous capabilities, we use Action Creators.

const dispatchStore = res => {
  return {
    type: actionTypes.STORE,
    result: res
  }
}
export const store = result => {
  // to get state information before dispatch use getState
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter
      console.log(oldCounter)
      dispatch(dispatchStore(result))
    }, 1000)
  }
}
export const del = resultID => {
  return {
    type: actionTypes.DELETE,
    resultID: resultID
  }
}
