let array = [3,6,3,5,3,5,6,7,4,4,3,3,5,6,7,4];
console.log("array", array);

function doubler(x) {
  return x * 2;
}

function cube(x) {
  return x * 4;
}

//map();
let map = array.map(doubler);
console.log("map", map);

let cubed = array.map(cube);
console.log("cubed", cubed);

let halfed = array.map(x => x / 2);
console.log("halfed", halfed);

//fill();
let fill = array.fill(10);
console.log("filled",fill);

//reduce();
let newarray = [3,4,3,2,7,4,8,3,4,6,8,4,3,2,2]
console.log("new array", newarray);

function sum(acc, val) {
  return acc + val;
}
let answer = newarray.reduce(sum);
console.log("reduced", answer);

let answer2 = newarray.reduce((acc, val) => acc + val);
console.log("reduced", answer2);

let max = newarray.reduce((acc, val) => acc > val ? acc : val); 
console.log("Max Number", max);

let min = newarray.reduce((acc, val) => acc > val ? acc : val); 
console.log("Min Number", min);

//filter();
newarray = newarray.filter(x => (x % 2 == 0))
console.log("evens", newarray);

let narray = [3,4,8,2,7,4,8,3,4,6,8,4,5,2,2]

narray = narray.filter(x => (x % 2 == 1))
console.log("odds", narray);

//sort();

let yarray = [3,4,8,2,7,4,8,3,4,6,8,4,5,2,2]

yarray.sort();
console.log("order! Ftttsss!", yarray);