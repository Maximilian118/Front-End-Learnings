export const updateState = (state, updatedValues) => {
  return {
    ...state,
    ...updatedValues
  }
}
