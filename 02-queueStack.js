/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
class Stack {
  constructor() {
    this.length = 0;
    this.storage = {};
  }

  push(item) {
    this.length += 1;
    this.storage[this.length] = item;
  }

  pop() {
    const item = this.storage[this.length];
    delete this.storage[this.length];
    this.length -= 1;
    return item;
  }

  size() {
    return this.length;
  }
}

/**
  * Queue Class
  */
  class Queue {
    constructor() {
      this.inbox = new Stack();
      this.outbox = new Stack();
    }
    // called to add an item to the `queue`
    enqueue(item) {
      this.inbox.push(item);
    }

    // called to remove an item from the `queue`
    dequeue() {
      while (this.inbox.length) {
        this.outbox.push(this.inbox.pop());
      }
      const item = this.outbox.pop();
      while (this.outbox.length) {
        this.inbox.push(this.outbox.pop());
      }
      return item;
    }

    // should return the number of items in the queue
    size() {
      return this.inbox.size();
    }
  }
