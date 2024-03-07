//toFixed method returns a string, so it has to be converted to a number again. There are multiple ways to do so, and the way I used it is through the Unary Operator. After looking online however, toFixed is not recommended by some since it can be inaccurate at times, so multiply the number by a power of ten (The power determines how many decimal places you want to go), then Math.round the result, then divide by the same power of ten (The scientific notation can be used, and makes visualizing it simple).

const convertToCelsius = function (degreesInFahrenheit) {
  result = +((degreesInFahrenheit - 32) * (5 / 9)).toFixed(1);
  return result;
};

const convertToFahrenheit = function (degreesInCelcius) {
  return Math.round(((9 / 5) * degreesInCelcius + 32) * 1e1) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
