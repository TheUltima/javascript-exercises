// const reverseString = function (string) {
//   let stringInReverse = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     stringInReverse += string[i];
//   }

//   return stringInReverse;
// };

const reverseString = function (string) {
  let stringInReverse = "";
  for (let i = 1; i <= string.length; i++) {
    stringInReverse += string.at(-i);
  }
  return stringInReverse;
};

// Do not edit below this line
module.exports = reverseString;
