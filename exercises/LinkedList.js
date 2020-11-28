// A node with the structure {next: Node, value: Integer}
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

// LinkedList implementation.
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    // Add a new node to the end of the linked list.
    add(value) {

    }

    // If the value is in the list, remove the node. If the value is not in the list, throw an error.
    remove(value) {

    }

    // Print the linked list.
    print() {

    }

    // Reverse the linked list.
    reverse() {
    
    }
}

// This exports the LinkedList as a class to be used externally.
module.exports = LinkedList;

/* EXTRA CREDIT 

  - What is the Big-O of the `add` function?
  - What is the Big-O of the `remove` function?
  - Make `add` and `remove` "chainable"
  - Make it a "Doubly-Linked List" by adding a `previous` to nodes
  - How could you change the data structure to make adding an element Big-O(1)

*/
