const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((total, current) => total + current, 0);
};

const multiply = function (nums) {
  return nums.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  // return a ** b; Both solutions work, just wanted to see if I can solve it with for loops
  let total = 1;
  for (let i = 0; i < b; i++) {
    total = total * a;
  }
  return total;
};

const factorial = function (num) {
  // if (num <= 1) {
  //   return 1;
  // }
  // return num * factorial(num - 1);
  let total = 1;
  for (let i = num; i > 0; i--) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
