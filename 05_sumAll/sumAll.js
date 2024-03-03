const sumAll = function (int1, int2) {
  let min = int1;
  let max = int2;

  if (int1 < 0 || int2 < 0) return "ERROR";
  if (typeof int1 !== "number" || typeof int2 !== "number") return "ERROR";

  if (min > max) {
    min = int2;
    max = int1;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
