/* eslint-disable no-extend-native */

// BEGIN (write your solution here)
Object.prototype.hash = function hash(path) {
  const keys = path.split('.');
  return keys.reduce(
    (acc, item) => (acc === undefined ? acc : acc[item]),
    this
  );
};
// END
