console.log("index.js");

const twoSumLessThanK = function (A, K) {
  A.sort((a, b) => a - b);
  let min = -1;
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    const sum = A[left] + A[right];
    if (sum >= K) {
      right -= 1;
    } else {
      left += 1;
      min = Math.max(min, sum);
    }
  }
  return min;
};
console.log(twoSumLessThanK([10, 20, 30], 15))