class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined; // Avoid duplicates
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  // In-order traversal of the BST (returns an array)
  traverse() {
    const result = [];

    function traverseHelper(node) {
      if (node) {
        traverseHelper(node.left);
        result.push(node.value);
        traverseHelper(node.right);
      }
    }

    traverseHelper(this.root);
    return result;
  }

  // Find the minimum value in the BST
  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  // Find the maximum value in the BST
  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  // Remove a value from the BST
  remove(value) {
    const removeNode = (node, value) => {
      if (!node) return null;
      if (value === node.value) {
        if (!node.left && !node.right) return null; // Node has no children
        if (!node.left) return node.right; // Node has only right child
        if (!node.right) return node.left; // Node has only left child

        // Node has two children, replace it with the minimum value from the right subtree
        const minRightNode = this.findMin(node.right);
        node.value = minRightNode.value;
        node.right = removeNode(node.right, minRightNode.value);
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
      } else {
        node.right = removeNode(node.right, value);
      }
      return node;
    };

    this.root = removeNode(this.root, value);
    return this;
  }

  // Helper function to find the minimum value in a subtree
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}
console.log(Node);

// Example usage:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("In-order traversal:", bst.traverse());
console.log("Min:", bst.min());
console.log("Max:", bst.max());

bst.remove(30);
console.log("After removing 30:", bst.traverse());
bst.search();
