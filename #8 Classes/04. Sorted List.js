class List {
  collection = [];
  constructor() {}
  size = 0;
  add(element) {
    this.element = element;
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size++;
  }
  remove(index) {
    this.index = index;
    if (index > this.collection.length - 1 || index < 0) {
      throw new Error("Incorrect Index!");
    } else {
      this.collection.splice(index, 1);
    }
  }

   get(index) {
    if (index > this.collection.length - 1 || index < 0) {
      throw new Error("Incorrect Index!");
    } else {
      return this.collection.at(index);
    }
  }
}
let myList = new List();
for (let i = 0; i < 5; i++) {
  myList.add(i);
}
myList.remove(0);

for (let i = 0; i < 4; i++) {
  console.log(myList.get(i));
}
