import * as actionType from '../actions/actionTypes'
import { updateState } from '../utility'

const initialState = {
  ingredients: null,
  totalPrice: 4,
  canPurchase: false
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

const init = () => {
  return {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }, 
    totalPrice: 4,
    canPurchase: false
  }
}

const changeIngs = (ings, totalPrice, action, op) => {
  const newIngs = {
    ...ings,
    [action]: op(ings[action], 1)
  }
  const sum = Object.values(newIngs).reduce((sum, el) => sum + el, 0)
  return {
    ingredients: newIngs,
    totalPrice: op(totalPrice, INGREDIENT_PRICES[action]),
    canPurchase: sum > 0,
  }
}

const op = {
  plus : (x, y) => x + y,
  minus : (x, y) => x - y
}

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INIT: return updateState(state, init())
    case actionType.ADD: return updateState(state, changeIngs(state.ingredients, state.totalPrice, action.ingredient, op.plus))
    case actionType.REMOVE: return updateState(state, changeIngs(state.ingredients, state.totalPrice, action.ingredient, op.minus))
    case actionType.POST_SUCCESS: return updateState(state, init())
    default: return state
  }
}

export default burgerReducer
