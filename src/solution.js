// BEGIN (write your solution here)
Function.prototype.wrap = function wrap(func) {
  return (...args) => func(this, ...args);
};
// END
