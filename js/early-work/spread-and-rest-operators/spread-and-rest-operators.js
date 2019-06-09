// spread operator
// add elements to an existing array
const array = ["big", "fish", "little", "fish", "square", "fish", "box"];
const toadd = ["sam", "is", ...array, "a", "jebend"];
console.log(toadd);

// pass elements of an array as arguments to a function
function nums(a, b, c) {
 console.log(a+b+c);
}
const arr = [5, 4, 3, 7]; // last argument ignored as only three funct items
nums(...arr);

// copy arrays
const arr1 = [4, 5, 6];
const arr2 = [...arr1]; // identical array with pushed no.
arr2.push(9);
console.log(arr1);
console.log(arr2);

// concatenate arrays
let arr3 = [6, 7, 8];
const arr4 = [9, 1, 2];
arr3.concat(arr4); // old way
arr3 = [...arr1, ...arr2, ...arr3, ...arr4]; // new way
console.log(arr3);

// rest operator
// condense multiple elements into an array
function args(multi, ...args) {  //multi = first arg & ...args = all others
  return args.map(function(num) {
    return multi * num;
  });
}
const boop = args(3,6,2,6);  // 3x6 & 3x2 & 3x6
console.log(boop);
