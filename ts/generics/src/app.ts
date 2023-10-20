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

const promise: Promise<string> = new Promise((res, err) => {
  setTimeout(() => {
    res("This is done")
  }, 2000)
})
