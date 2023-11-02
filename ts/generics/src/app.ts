// Generic Types are used to further define types in TS.
//
// Let's take a look at this default type that's built into TS, string[].
// You could think of this as two types being combined.
// We know it's an Array type and we know the array will contain only strings.
//
// If we allow TS to assume types for us when we populate the initial Array we'll see
// string[] if we add strings. If we remove the data inside the Array we'll of course
// see any[].
//
// The syntax for declaring a Generic Type in the below exmple would be
// string[] or Array<string>.

const names: string[] = ["luke", "dale"]
const names2: Array<string> = ["example", "2"]
const numbers: number[] = [1, 4, 6, 3]

// When we're specific about what's in these arrays TS won't give us any errors when we
// try and execute certain methods. For example split would throw an error here if TS
// wasn't aware that EVERY index in the array will be a string.

names[0].split("")

// Promises are also Generic Types.
// In the following example, unless we tell TS otherisde the default type would be
// Promise<unknown>. This is because TS can't see that ultimately we will return a
// string. In this case what we can do is add Promise<string> tell TS that actually
// we know that a string will be returned.

// const promise: Promise<string> = new Promise((res, err) => {
//   setTimeout(() => {
//     res("This is done")
//   }, 2000)
// })

// Creating generic functions
const merge = (objA: object, objB: object) => {
  return Object.assign(objA, objB)
}

// Consider the function above.
// At the moment TS will return an object with no knowledge of what the object consists
// of. We need to give TS more information as to what we expect this object to contain.
//
// For example if we try and reference name or age in mergeObj below TS will throw an
// error.
const mergedObj = merge({ name: "Max" }, { age: 29 })

// Here in merge2 we're defining types using the angled brackets.
// We're utilising type inferance here with T and U.
//
// We're still quite vague in our type assignments here. This is actually deliberate
// as we want to sustain a level of flexability for example if we wanted to add another
// key value pair to either of these objects.
//
// All we're saying here is that we expect to return different types of data for these
// two arguments and overall we'll return the intersection of this data.
const merge2 = <T extends object, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB)
}

// By telling TS that we know these two data sets will be different we unlock much more
// functionality that TS can offer when we call this function. A very basic example is
// that we can now access the age value with dot notation.
const mergedObj2 = merge2({ name: "Max" }, { age: 29 })
console.log(mergedObj2.age)

// Working with constraints.
//
// At the moment, what if we pass in the number 30 instead of an object when we call
// this function? Actually, TS wouldn't complain at all as we haven't specified
// anything about these types.
//
// To combat this we need to be a little more specific when defining these types.
// We can achive this by telling TS that we expect T and U to be object using the
// syntax below:
const merge3 = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB)
}

// As a result if we try and pass anything other than an object to merge3 TS will
// throw an error as that would no longer match the type assignment.
