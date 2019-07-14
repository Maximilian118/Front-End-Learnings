export const updateState = (state, updatedValues) => {
  return {
    ...state,
    ...updatedValues
  }
}

const isValid = (val, rules, event) => {
  let valid = true
  if (rules.emailRequired) {
    valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event) && valid // eslint-disable-line no-useless-escape
  }
  if (rules.passwordRequired) {
    valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event) && valid // eslint-disable-line no-useless-escape
  }
  if (rules.postCodeRequired) {
    valid = /\b((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})\b/ig.test(event) && valid // eslint-disable-line no-useless-escape
  }
  if (rules.required) {
    valid = val.trim() !== '' && valid // trim = doesn't become true with whitespace.
  }
  return valid
}

const inputChangedHandler = (formObj, event, ident, formState) => {
  const form = { ...formObj }
  event.persist()
  form[ident].value = event.target.value
  form[ident].valid = isValid(form[ident].value, form[ident].validation, event.target.value)
  form[ident].touched = true
  if (form[ident].invalidPopUp) {
    formState.popUp = form[ident].invalidPopUp
  }
  if (form[ident].valid) {
    formState.popUp = null
  }
  return form
}

const isFormValid = obj => {
  let valid = true
  for (let i in obj) {
    valid = obj[i].valid && valid
  }
  return valid
}

export const detailsForm = (formObj, event, ident, formState) => {
  return {
    formIsValid: isFormValid(formObj),
    orderForm: inputChangedHandler(formObj, event, ident, formState)
  }
}

export const authForm = (formObj, event, ident, formState) => {
  return {
    formIsValid: isFormValid(formObj),
    controls: inputChangedHandler(formObj, event, ident, formState)
  }
}