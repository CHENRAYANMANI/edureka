class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  _hash(key) {
    // Private method to compute the hash value for a given key.
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    // Insert a key-value pair into the hash table.
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    // Retrieve the value associated with a given key.
    const index = this._hash(key);
    if (!this.table[index]) {
      throw new Error(`Key '${key}' not found in the hash table`);
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
    throw new Error(`Key '${key}' not found in the hash table`);
  }

  search(key) {
    // Check if a key exists in the hash table.
    const index = this._hash(key);
    if (!this.table[index]) {
      return false;
    }
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return true;
      }
    }
    return false;
  }

  display() {
    // Display the contents of the hash table.
    for (let index = 0; index < this.size; index++) {
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          const [key, value] = this.table[index][i];
          console.log(`Index ${index}: Key='${key}', Value='${value}'`);
        }
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable(10);
hashTable.set("apple", "red");
hashTable.set("banana", "yellow");
hashTable.set("grape", "purple");

hashTable.display();

console.log("Get 'apple':", hashTable.get("apple"));
console.log("Search for 'banana':", hashTable.search("banana"));
console.log("Search for 'watermelon':", hashTable.search("watermelon"));
