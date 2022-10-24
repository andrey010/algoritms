//Baseball Game - LeetCode
var calPoints = function (ops) {
  const res = [];
  ops.forEach((el) => {
    if (!isNaN(el)) res.push(+el);
    if (el === "C") res.pop();
    if (el === "D") res.push(2 * res[res.length - 1]);
    if (el === "+") res.push(res[res.length - 2] + res[res.length - 1]);
  });
  if (res.length > 0) return res.reduce((a, b) => a + b, 0);
  return 0;
};
