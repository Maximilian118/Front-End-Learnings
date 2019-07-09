import * as actionType from '../actions'

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

const updatePurchaseState = (ingredients) => {
  const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0)
  return (sum > 0)
}

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INIT:
      return {
        ...state,
        ingredients: {...action.ingredients}
      }
    case actionType.ADD:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
        canPurchase: updatePurchaseState(state.ingredients)
      }
    case actionType.REMOVE:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient],
        canPurchase: updatePurchaseState(state.ingredients)
      }
    default: return state
  }
}

export default burgerReducer