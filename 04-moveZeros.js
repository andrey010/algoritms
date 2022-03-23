/* function moveZeros(nums) {
  let count = 0
  const newArr = []
  nums.forEach(item => item === 0 ? count++ : newArr.push(item))
  for (let i = 0; i < count; i++) newArr.push(0)

  return newArr 
} */
const moveZeros = (nums) => nums.filter(n => n !==0).concat(nums.filter(n => n === 0))

const a = [
  9, 0, 0, 9, 1, 2, 0,
  1, 0, 1, 0, 3, 0, 1,
  9, 0, 0, 0, 0, 9
]

const s = moveZeros(a)
console.log(s)