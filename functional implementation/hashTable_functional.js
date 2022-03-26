// Encapsulated hash table

const storage = {};

function search(key) {
  storage.hasOwnProperty(key) ? true : false;
}

function create(key, value) {
  if (storage.hasOwnProperty(key)) throw new Error(`${key} already exists`);

  storage[key] = value;
}

function read(key) {
  if (!storage.hasOwnProperty(key)) throw new Error(`${key} not found`);

  return storage[key];
}

function update(key, value) {
  if (!storage.hasOwnProperty(key)) throw new Error(`${key} not found`);

  storage[key] = value;
}

function remove(key) {
  if (!storage.hasOwnProperty(key)) throw new Error(`${key} not found`);

  delete storage[key];
}

function list() {
  return Object.keys(storage).map((key) => ({ key, value: storage[key] }));
}

function count() {
  return Object.keys(storage).length;
}

create('hello', 'hassuu');
create('yello', 'hasnee');
create('lello', 'haso');
create('mello', 'hasnoo');
console.log(storage);
remove('lello');
console.log(storage);
console.log(read('yello'));
