class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Insert at the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Insert after a specific node
  insertAfter(targetNodeData, data) {
    const newNode = new Node(data);
    let current = this.head;

    while (current) {
      if (current.data === targetNodeData) {
        if (current === this.tail) {
          // If the target node is the last node, update the tail
          this.tail = newNode;
        } else {
          // Update the next node's previous pointer
          current.next.prev = newNode;
          // Update newNode's next and prev pointers
          newNode.next = current.next;
          newNode.prev = current;
        }
        // Update current's next pointer
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    console.log(`Node with data ${targetNodeData} not found in the list.`);
  }

  // Display the linked list
  display() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }
}

// Example usage:
const dll = new DoublyLinkedList();
console.log(dll);
dll.append(1);
dll.append(99);
dll.append(2);
dll.append(2.5);
dll.append(3);
dll.append(3);
dll.append(4);

dll.display(); // Output: 0 <-> 1 <-> 2 <-> 4 <-> 3
