// A node with the structure {next: Node, value: Integer}
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
        this.previous = null;
    }
}

// LinkedList implementation.
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
        this.tail = null
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
            new_node.previous = current;

        }
        this.tail = new_node;
        this.size++;
        return this;
    }

    // If the value is in the list, remove the node. If the value is not in the list, throw an error.
    remove(value) {
        var current = this.head;
        var previous = this.head;
        if (current.value == value){
            this.head = current.next;
            current.previous = null;
            this.size--;
            if (current.next == null){
                this.tail = null;
            }
            return this;
        }

        while(current.next != null){
            if (current.next.value == value){
                current.next = current.next.next;
                if (current.next != null){
                    current.next.previous = previous;
                }
                this.size--;
                if (current.next == null){
                    this.tail = current;
                }
                return this;
            }
            previous = current;
            current = current.next;
        }
        throw new Error("value not found")
    }

    // Print the linked list.
    print() {
        if (!this.head){
            console.log("the list is empty");
            return this;
        }
        var current = this.head;
        while(current.next != null){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
        return this;
    }

    // Reverse the linked list.
    reverse() {
        var current = this.head;
        this.tail = this.head;
        var temp;
        var previous = null;
        while (current.next != null){
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        current.next = previous;
        this.head = current;
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
