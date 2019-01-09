const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const buildAttrString = attrs =>
  Object.keys(attrs)
    .map(key => ` ${key}="${attrs[key]}"`)
    .join('');

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string'
  },
  {
    name: 'children',
    check: arg => arg instanceof Array
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object
  }
];

const getPropertyAction = arg =>
  propertyActions.find(({ check }) => check(arg));

export const parse = data => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: []
  };
  const rootTag = rest.reduce((acc, arg) => {
    const { name } = getPropertyAction(arg);
    return {
      ...acc,
      [name]: arg
    };
  }, root);

  const { children } = rootTag;
  if (!children) {
    return rootTag;
  }
  return {
    ...rootTag,
    children: children.reduce((acc, val) => [...acc, parse(val)], [])
  };
};

export const render = tag =>
  [
    `<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${
      singleTagsList.has(tag.name)
        ? ''
        : `${tag.body}${tag.children.map(render).join('')}</${tag.name}>`
    }`
  ].join('');
// END
