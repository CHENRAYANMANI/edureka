class Stack {
  constructor(size) {
    if (isNaN(size)) {
      size = 4;
    }
    this.items = [];
    this.size = size;
    this.top = 0;
  }
  add(element) {
    if (this.top >= this.size) {
      console.log("Stack overflow");
      return;
    }
    this.items[this.top] = element;
    this.top += 1;
    return this.items;
  }
  remove() {
    if (this.top > 0) {
      console.log("Stack underflow");
      return;
    }
    let x = this.items[this.top];
    this.top -= this.top;
    this.items = this.items.slice(0, this.top + 1);
    console.log(`${x}:{${this.items}}`);
  }
  peek() {
    if (this.items.length === 0) {
      console.log("Stack underflow");
      return;
    }
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}

let stack = new Stack(4);
stack.add(2);
console.log(stack.items);
stack.add(4);
console.log(stack.items);
stack.add(8);
console.log(stack.items);
stack.add(10);
console.log(stack.items);
stack.add(10);
console.log(stack.items);

stack.remove();
console.log(stack.items);
console.log(Stack);
console.log(`${stack.peek()} is removed`);
console.log(stack.isEmpty());
stack.clear();
console.log(stack.items);
