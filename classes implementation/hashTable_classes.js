// Encapsulated hash table

class hashTable {
  constructor() {
    this.storage = {};
  }

  search(key) {
    this.storage.hasOwnProperty(key) ? true : false;
  }

  create(key, value) {
    if (this.storage.hasOwnProperty(key)) throw new Error(`${key} already exists`);

    this.storage[key] = value;
  }

  read(key) {
    if (!this.storage.hasOwnProperty(key)) throw new Error(`${key} not found`);

    return this.storage[key];
  }

  update(key, value) {
    if (!this.storage.hasOwnProperty(key)) throw new Error(`${key} not found`);

    this.storage[key] = value;
  }

  delete(key) {
    if (!this.storage.hasOwnProperty(key)) throw new Error(`${key} not found`);

    delete this.storage[key];
  }

  list() {
    return Object.keys(this.storage).map((key) => ({ key, value: this.storage[key] }));
  }

  count() {
    return Object.keys(this.storage).length;
  }
}

const hashTableObj = new hashTable();
hashTableObj.create('hassuu', 'meow');
hashTableObj.create('asad', 'bhau');
hashTableObj.create('ahmad', 'cheaw');
console.log(hashTableObj.list());
hashTableObj.delete('ahmad');
console.log(hashTableObj.list());
