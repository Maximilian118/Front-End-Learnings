// const fontEndDevSuccess = (intelligence) => {
//   let time = 0;
//   let knowledge = 0;
//   let coffee = 0;
//   for (i; i < i.length; i++) {
//     knowledge++;
//     coffee++
//   }
//   return knowledge = coffee + time;
// }

// console.log(fontEndDevSuccess(intelligence))

// function diffArray(arr1, arr2) {                            // filter array elements that don't match
//   const tmp1Arr = arr1.concat(arr2);
//   const tmp2Arr = arr1.concat(arr2);
//   const newArr = [];
//   for (let i = 0; i < tmp1Arr.length; i++) {
//     for (let j = 0; j < tmp2Arr.length; j++) {
//       if (i !== j) {
//         newArr.push(i);
//         console.log(newArr);
//       }
//     }
//   }
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// const sumAll = arr => {                                   // array fill, order and add
//   const newArr = [];
//   const left = arr[0];
//   const right = arr[1];
//   if (left < right) {
//     newArr.push(left);
//     for (let i = left +1; i < right; i++) {
//       newArr.push([i]);
//     }
//     newArr.push(right);
//     let red = newArr.reduce((a, b) => parseInt(a) + parseInt(b));
//     return(red);
//   } else {
//     for (let i = right +1; i < left; i++) {
//       newArr.unshift([i]);
//     }
//     newArr.push(right);
//     newArr.unshift(left);
//     let red = newArr.reduce((a, b) => parseInt(a) + parseInt(b));
//     return(red);
//   }
// }

// sumAll([10, 5]);

// const sentence = ['sense.','make', 'all', 'will', 'This'];
// const nums = [1,2,3,4,5,6,7,8,9,10]

// const way = (arr) => {
//   let me = [];
//   for (let i = 0; i < arr.length; i--) {
//     let yo = arr.pop();
//     me = arr.unshift(yo);
//     console.log(me);
//   }
//   return me;
// }

// console.log(way(sentence))
// console.log(way(nums))

// const way = (arr) => {                   //.filter
//   let yo = arr.filter(i => i < 5)
//   return yo;
// }

// console.log(way(sentence))
// console.log(way(nums))

// const funky = (arr) => {                  //.map
// let yo = arr.map(i => i * 2);
// return yo;
// }

// console.log(funky(sentence))
// console.log(funky(nums))