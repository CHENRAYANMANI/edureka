class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 4;
  }

  // Insertion at the end of the linked list
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Deletion of a node by value
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
    }
  }

  // Search for a node by value
  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Print the linked list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
console.log(linkedList);
linkedList.insert(2);
linkedList.insert(99);
linkedList.insert(2.5);
linkedList.insert(3);
linkedList.insert(4);
linkedList.print(); // Output: 1 2 3

linkedList.delete(2);
// linkedList.print(); // Output: 1 3

console.log(linkedList.search(1)); // Output: true
console.log(linkedList.search(2)); // Output: false

let a = "5";
let b = 3;
console.log(a + b);
console.log(typeof null);
