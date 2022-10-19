// function invert(array) {
//   array = array.map((num) => {
//     if (num < 0) return Math.abs(num);
//     return -num;
//   });

//   return array;
// }
const invert = array => array.map(num => -num);