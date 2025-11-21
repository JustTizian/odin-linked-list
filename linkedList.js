export default class LinkedList {
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

  pop() {
    if (this.size() === 0) return;
    let temp = this.first;
    if (!temp.next) return;
    while (temp) {
      if (!temp.next.next) {
        temp.next = null;
        break;
      }
      temp = temp.next;
    }
  }

  contains(value) {
    let temp = this.first;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let temp = this.first;
    while (temp) {
      if (temp.value === value) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return null;
  }

  toString() {
    let temp = this.first;
    let output = "";
    while (temp) {
      output += `( ${temp.value} ) -> `;
      if (!temp.next) {
        output += null;
      }
      temp = temp.next;
    }
    return output;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size()) {
      this.append(value);
      return;
    }

    let previous = null;
    let current = this.first;
    let i = 0;
    while (current) {
      if (i === index) {
        previous.next = new Node(value, current);
        return;
      }
      i++;
      previous = current;
      current = current.next;
    }
  }

  removeAt(index) {
    if (index >= this.size() || this.size() === 0) {
      return;
    }
    if (index === 0) {
      this.first = this.first.next;
      return;
    }
    let previous = null;
    let current = this.first;
    let i = 0;
    while (current) {
      if (i === index) {
        previous.next = current.next;
        return;
      }
      i++;
      previous = current;
      current = current.next;
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
