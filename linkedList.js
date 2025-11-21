class LinkedList {
  constructor() {
    this.first = null;
  }

  append(value) {
    if (!this.first) {
      this.first = new Node(value, null);
    } else {
      let temp = this.first;
      while (temp.next) temp = temp.next;
      temp.next = new Node(value, null);
    }
  }

  prepend(value) {
    let oldFirst = this.first;
    this.first = new Node(value, oldFirst);
  }

  size() {
    let count = 0;
    let temp = this.first;
    while (temp) {
      temp = temp.next;
      count++;
    }
    return count;
  }

  head() {
    return this.first;
  }

  tail() {
    let temp = this.first;
    while (temp) {
      if (!temp.next) {
        break;
      }
      temp = temp.next;
    }
    return temp;
  }

  at(index) {
    let count = 0;
    let temp = this.first;
    while (temp) {
      if (count === index) {
        return temp;
      }
      count++;

      temp = temp.next;
    }
    return null;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const myList = new LinkedList();
myList.append("Head");
myList.append("Toe");
myList.append("Tooth");
myList.append("Pumpkin");
myList.append("Tail");
myList.append("Coin");
myList.prepend("Start");

console.log(myList.size());
console.log(myList.head());
console.log(myList.tail());
console.log("-----------");
console.log(myList.at(0));
console.log(myList.at(6));
console.log(myList.at(6));