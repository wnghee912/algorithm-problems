/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

class Tree {

  constructor(value) {
    this.value = value;
    this.children = [];
  }

  DFSelect(filter) {

    const result = [];

    const findNode = (node, depth) => {
      if (filter(node.value, depth)) {
        result.push(node.value);
      }
      if (node.children) {
        for (let i = 0; i < node.children.length; i += 1) {
          findNode(node.children[i], depth + 1);
        }
      }
    };

    findNode(this, 0);
    return result;
  }


  /**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
  addChild(child) {
    if (!child || !(child instanceof Tree)) {
      child = new Tree(child);
    }

    if (!this.isDescendant(child)) {
      this.children.push(child);
    } else {
      throw new Error('That child is already a child of this tree');
    }
    // return the new child node for convenience
    return child;
  }

  /**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */

  isDescendant(child) {
    if (this.children.indexOf(child) !== -1) {
      // `child` is an immediate child of this tree
      return true;
    } else {
      for (let i = 0; i < this.children.length; i += 1) {
        if (this.children[i].isDescendant(child)) {
          // `child` is descendant of this tree
          return true;
        }
      }
      return false;
    }
  }

  /**
    * remove an immediate child
    */

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
    // remove the child
      this.children.splice(index, 1);
    } else {
      throw new Error('That node is not an immediate child of this tree');
    }
  }
}


const root1 = new Tree(1);
const branch2 = root1.addChild(2);
const branch3 = root1.addChild(3);
const leaf4 = branch2.addChild(4);
const leaf5 = branch2.addChild(5);
const leaf6 = branch3.addChild(6);
const leaf7 = branch3.addChild(7);
const end8 = leaf4.addChild(8);
const end9 = leaf4.addChild(9);
const end10 = leaf5.addChild(10);
const end11 = leaf5.addChild(11);
const end12 = leaf6.addChild(12);
const end13 = leaf6.addChild(13);
const end14 = leaf7.addChild(14);
const end15 = leaf7.addChild(15);

console.log(root1)
console.log(root1.DFSelect((value, depth) => { return value % 2; }));
console.log(root1.DFSelect((value, depth) => { return depth === 1; }));
