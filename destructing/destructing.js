const para = {  // an object 
  x : 5,
  y : 3,
  z : 9
}
let { x:a, y:b, z:c} = para;  // object arg vals into a, b and c

//-------------------------------------------------------------//
funcName({
  a : "banana",
  b : ["cello", "basoon"],
  c : "1669"
})

function funcName(whatever) {
  whatever.a = "boobs"
  whatever.c += 2000;
  whatever.d = "added"
  console.log(whatever);
  console.log(whatever.b);
  delete whatever.a;
  console.log(whatever);
}

//-------------------------------------------------------------//
const instruments = (materdoesnot) => {
  materdoesnot.a = "drums";
  console.log(materdoesnot);
  console.log("I play " + materdoesnot.a + " and the " + materdoesnot.e);
};

instruments({
  a : "cello",
  b : "fiddle",
  c : "trumpet",
  d : "guitar",
  e : "triangle"
});