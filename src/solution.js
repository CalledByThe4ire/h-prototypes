/* eslint-disable no-extend-native */

// BEGIN (write your solution here)
Object.prototype.hash = function hash(str) {
  function iter(acc, keys) {
    const [key] = keys;
    if (keys.length === 1) {
      return acc[key];
    }
    if (acc.hasOwnProperty(key)) {
      return iter(acc[key], keys.slice(1));
    }
    return undefined;
  }
  return iter(this, str.split('.'));
};
// END
