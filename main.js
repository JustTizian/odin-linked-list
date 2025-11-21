import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("Remove please");
list.append("Second");
list.append("Third");
list.append("Fifth");
list.prepend("First");
list.append("Remove too");

console.log(list.size());

console.log(list.head());

console.log(list.tail());

console.log(list.at(-1));
console.log(list.at(0));
console.log(list.at(3));

console.log(list.toString());
list.pop();
console.log(list.toString());

console.log(list.contains("First"));
console.log(list.contains("Seventh"));

console.log(list.find("Third"));
console.log(list.find("Seventh"));

list.insertAt("Fourth", 4);
console.log(list.toString());

list.removeAt(1);
console.log(list.toString());
