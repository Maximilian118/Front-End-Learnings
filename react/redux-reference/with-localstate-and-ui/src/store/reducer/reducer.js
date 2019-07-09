import * as actionType from '../actions'

const initialState = {
  people: []
}

const reducer = (state = initialState, action) => {
  console.log(action.name)
  switch (action.type) {
    case actionType.ADD:
      return {
        ...state,
        people: state.people.concat({id: action.id, name: action.name, age: action.age})
      }
    case actionType.DELETE:
      return {
        ...state,
        people: state.people.filter(person => person.id !== action.id)
      }
    default: return state
  }
}

export default reducer