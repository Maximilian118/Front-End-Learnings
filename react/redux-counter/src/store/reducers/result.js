import * as actionType from '../actions'

const initialState = {
  results: []
}
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE: 
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}) // Push to an arr immutably = concat
      }
    case actionType.DELETE:
      const newArr = state.results.filter(res => res.id !== action.resultID)
      return { 
        ...state,
        results: newArr
      }
    default:
      return state
  }
}

export default resultReducer