// const palindromes = function (string) {
//   const AlphaNumerical = "abcdefghijklmnopqrstuvwxyz012345689";

//   const filteredString = string
//     .toLowerCase()
//     .split("")
//     .filter((character) => {
//       return AlphaNumerical.includes(character);
//     })
//     .join("");

//   const reversedString = [...filteredString].toReversed().join("");
//   return reversedString === filteredString;
// };

//Try it with regex

const palindromes = function (string) {
  const regex = new RegExp("[a-zA-Z0-9]", "gm");
  const filteredString = string.match(regex).join("").toLowerCase();

  const reversedString = [...filteredString].toReversed().join("");

  return filteredString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
