class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    // Add an item to the queue.
    Enqueue(value) {
      this.size = this.queue.push(value);
      return this;
    }

    // Remove an item from the queue and return it. Return `null` if the queue is empty.
    Dequeue() {
      if (this.size > 0){
        this.size--;
       return this.queue.shift();
      }
      return null;
    }

    // return the item at the beginning of the queue
    peek(){
      return this.queue[0];
    }

}

module.exports = Queue;

/* EXTRA CREDIT 

  - What is the Big-O of the `enqueue` function?
  - What is the Big-O of the `dequeue` function?

*/
