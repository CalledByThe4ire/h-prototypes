// BEGIN (write your solution here)
import Node from './Node';

export default class extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }

  toString() {
    return `<${this.getName()}${this.getAttributesAsLine()}>`;
  }
}
// END
