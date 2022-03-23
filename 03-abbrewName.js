/* function abbrevName(name){
  name = name.split(' ').map(item => item.charAt(0).toUpperCase()).join('.')
  return name
} */

const abbrevName = (name) => name.split(' ').map(item => item.charAt(0).toUpperCase()).join('.')
console.log(abbrevName("sam harris"))