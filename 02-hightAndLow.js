function highAndLow(numbers){
  numbers = numbers.split(' ')  
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

//const highAndLow = (numbers) => `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' ')  )}`

console.log(highAndLow('5 6 2 -3'))
