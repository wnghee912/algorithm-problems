/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      const preTail = this.tail;
      this.tail = newNode;
      preTail.next = newNode;
    }
  }

  removeHead() {
    let removeHeadValue;
    if (!this.head) {
      throw new Error('No Element!!');
    } else {
      removeHeadValue = this.head.value;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
    }
    return removeHeadValue;
  }

  contains(value) {
    let preHead = this.head;
    while (preHead) {
      if (preHead.value === value) {
        return true;
      }
      preHead = preHead.next;
    }
    return false;
  }
}

const list = new LinkedList();
console.log(list.tail);         //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'true';
console.log(list.removeHead()); //yields '4'
console.log(list.removeHead()); //yields '5'
console.log(list.tail.value);   //yields '6';
