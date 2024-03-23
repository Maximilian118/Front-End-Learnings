// Validation
export interface Validatable {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

export const validate = (valInt: Validatable) => {
  let isValid = true

  if (valInt.required) {
    isValid = isValid && valInt.value.toString().trim().length !== 0
  }

  if (valInt.minLength != null && typeof valInt.value === "string") {
    isValid = isValid && valInt.value.length >= valInt.minLength
  }

  if (valInt.maxLength != null && typeof valInt.value === "string") {
    isValid = isValid && valInt.value.length <= valInt.maxLength
  }

  if (valInt.min != null && typeof valInt.value === "number") {
    isValid = isValid && valInt.value >= valInt.min
  }

  if (valInt.max != null && typeof valInt.value === "number") {
    isValid = isValid && valInt.value <= valInt.max
  }

  return isValid
}
