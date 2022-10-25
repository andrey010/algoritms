/* Remove first and last char */
// function removeChar(str) {
//   return str
//     .split("")
//     .slice(1, str.length - 1)
//     .join("");
// }

function removeChar(str) {
    return str.slice(1, -1);
}
