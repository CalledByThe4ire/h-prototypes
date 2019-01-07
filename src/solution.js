// BEGIN (write your solution here)
const helpers = {
  isArray(entity) {
    return Array.isArray(entity);
  },
  isObject(entity) {
    return Object.prototype.toString.call(entity) === '[object Object]';
  },
  isString(entity) {
    return typeof entity === 'string';
  }
};

const buildHtml = tree => {
  const [tag, ...data] = tree;
  if (data.length === 0) {
    return `<${tag}></${tag}>`;
  }
  const attrs = data
    .map(item => {
      if (helpers.isObject(item)) {
        return ` ${Object.entries(item)
          .map(([prop, val]) => `${prop}="${val}"`)
          .join(' ')}`;
      }
      return null;
    })
    .filter(v => v);
  return `<${tag}${attrs}>${data
    .map(item => {
      if (helpers.isString(item)) {
        return `${item}`;
      }
      if (helpers.isArray(item)) {
        return `${item.reduce((acc, el) => `${acc}${buildHtml(el)}`, ``)}`;
      }
      return ``;
    })
    .join('')}</${tag}>`;
};

export default buildHtml;
// END
