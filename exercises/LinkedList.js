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
        var new_node = new Node(value);
        if (this.head == null){
            // make new_node the head, exit
            this.head = new_node;
        }
        else {
            // add node to end, change pointer of previous
            var current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = new_node;
        }
        this.size++;
    }

    // If the value is in the list, remove the node. If the value is not in the list, throw an error.
    remove() {

    }

    // Print the linked list.
    print() {

    }

    // 
    reverse() {
    
    }
}

// This exports the LinkedList as a class to be used externally.
module.exports = LinkedList;

/* EXTRA CREDIT 

  - What is the O(n) of the `add` function?
  - What is the O(n) of the `remove` function?
  - Make `add` and `remove` "chainable"
  - Make it a "Doubly-Linked List" by adding a `previous` to nodes
  - How could you change the data structure to make adding an element O(1)

*/
