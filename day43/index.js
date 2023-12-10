class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Insert a value into the Max Binary Heap
  push(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (element <= parent) break;

      // Swap the child and parent
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // Remove and return the maximum value (root) from the Max Binary Heap
  popMax() {
    if (this.values.length === 0) return undefined;

    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      // Swap the parent with the larger child
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

// Example usage:
const maxHeap = new MaxBinaryHeap();
maxHeap.push(41);
maxHeap.push(39);
maxHeap.push(33);
maxHeap.push(18);
maxHeap.push(27);
maxHeap.push(12);
maxHeap.push(55);

console.log("Max Heap:", maxHeap.values); // [55, 39, 41, 18, 27, 12, 33]

const max = maxHeap.popMax();
console.log("Max:", max); // 55
console.log("Max Heap after popMax:", maxHeap.values); // [41, 39, 33, 18, 27, 12]
