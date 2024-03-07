const fibonacci = function (sequenceCount) {
  if (sequenceCount < 0) return "OOPS";
  let fib = [0, 1]; //get the first 2 values in the sequence
  for (let i = 2; i <= sequenceCount; i++) {
    //i starts at 2 (i.e. third sequence) because the first 2 are already defined.
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[sequenceCount];
};

// Do not edit below this line
module.exports = fibonacci;
