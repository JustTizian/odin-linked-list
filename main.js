import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("ssd")
list.append("ss")

list.insertAt("dd", 2)
list.removeAt(20)

console.log(list.toString())
