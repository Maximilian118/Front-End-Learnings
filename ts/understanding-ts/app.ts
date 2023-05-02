
// Unknown type is uncommon but is used.
// Unknown is a lot like Any but is a bit more restrictive.
let userInput: unknown
let userName: string

userInput = 5
userInput = "moo"

// This can not be done with unknown but can be done with any.
// userName = userInput

// The type never is intended for the use case of not wanting to return anything from a function.
const generateError = (message: string, code: number): never => {
  throw { message, code }
}

generateError("random message", 500)