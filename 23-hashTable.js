/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

 // I'll use Linked List when I save hashtable key, value //

class Node {
  constructor(key, value) {
    this.value = {};
    this.value.key = key;
    this.value.keyValue = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevTail = this.tail;
      prevTail.next = newNode;
      this.tail = newNode;
    }
  }

  removeNode(key) {
    if (!this.head) {
      return false;
    } else {
      let targetValue = this.head;
      if (targetValue === this.tail) {
        if (targetValue.value.key === key) {
          this.head = null;
          this.tail = null;
        } else {
          return false;
        }
      } else {
        while (targetValue) {
          if (targetValue.next.value.key === key) {
            if (targetValue.next.next) {
              const deleteValue = targetValue.next.next;
              targetValue.next = targetValue.next.next;
              return deleteValue;
            } else {
              targetValue.next = null;
            }
          }
          targetValue = targetValue.next;
        }
      }
    }
    return false;
  }

  retrieve(key) {
    if (!this.head) {
      return false;
    } else {
      let targetValue = this.head;
      while (targetValue) {
        if (targetValue.value.key === key) {
          return targetValue.value.keyValue;
        } else {
          targetValue = targetValue.next;
        }
      }
      return false;
    }
  }
}

const makeHashTable = () => {
  const result = {};
  const storage = [];
  const storageLimit = 1000;

  for (let i = 0; i < storageLimit; i += 1) {
    storage[i] = new LinkedList();
  }

  result.insert = (key, value) => {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index].addToTail(key, value);
  };

  result.retrieve = (key) => {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    return storage[index].retrieve(key);
  };

  result.remove = (key) => {
    const index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index].removeNode(key);
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const hashtable = makeHashTable();
hashtable.insert('kong', 'yungoo');
hashtable.insert('yungoo', 'kong');
hashtable.insert('wnghee', 'lee');
console.log(hashtable.retrieve('kong'));
console.log(hashtable.retrieve('yungoo'));
console.log(hashtable.retrieve('wnghee'));
hashtable.remove('kong');
hashtable.remove('yungoo');
console.log(hashtable.retrieve('kong'));
console.log(hashtable.retrieve('yungoo'));
console.log(hashtable.retrieve('wnghee'));
console.log(getIndexBelowMaxForKey('763', 1000));
console.log(getIndexBelowMaxForKey('1861', 1000));
hashtable.insert('763', 'first');
hashtable.insert('1861', 'second');
console.log(hashtable.retrieve('763'));
console.log(hashtable.retrieve('1861'));
