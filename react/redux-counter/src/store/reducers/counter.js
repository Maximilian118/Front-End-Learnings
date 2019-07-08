import * as actionType from "../actions";

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT: 
      return {
        ...state,
        counter: state.counter + action.payload 
      }
    case actionType.DECREMENT: 
      return {
        ...state,
        counter: state.counter - action.payload 
      }
    case actionType.ADD: 
      return {
        ...state,
        counter: state.counter + action.payload 
      }
    case actionType.SUBTRACT: 
      return {
        ...state,
        counter: state.counter - action.payload 
      }
    default:
      return state
  }
}

export default counterReducer