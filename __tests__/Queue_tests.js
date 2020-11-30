var Queue = require('../exercises/Queue.js');

describe("Queue", () => {
    const FIRST_VALUE = 6;
    const SECOND_VALUE = 7;

    let queue;
    beforeEach(() => {
        queue = new Queue();
    });
 
    afterEach(() => { 
        queue = null; 
    });

    describe("Enqueue", () => {
        it('Should create the first item of the queue', () => {
            queue.Enqueue(FIRST_VALUE);
            expect(queue.queue[0]).toEqual(FIRST_VALUE);
        });

        it('Should add an item to the top of the stack', () => {
            queue.Enqueue(FIRST_VALUE);
            queue.Enqueue(SECOND_VALUE);
            expect(queue.queue[0]).toEqual(FIRST_VALUE);
            expect(queue.queue[1]).toEqual(SECOND_VALUE);
        });

        it('Should increase in size', () => {
            expect(queue.size).toEqual(0);
            queue.Enqueue(FIRST_VALUE);
            expect(queue.size).toEqual(1);
        });
    });

    describe("Dequeue", () => {
        it('Should remove and return an item from the queue', () => {
            queue.Enqueue(FIRST_VALUE);
            expect(queue.queue[0]).toEqual(FIRST_VALUE);
            var value = queue.Dequeue();
            expect(queue.queue[0]).toBeUndefined();
            expect(value).toEqual(FIRST_VALUE);
        });

        it("Should remove and return the first item from the queue", () => {
            queue.Enqueue(FIRST_VALUE);
            queue.Enqueue(SECOND_VALUE);
            var value = queue.Dequeue();
            expect(value).toEqual(FIRST_VALUE);
            expect(queue.queue[0]).toEqual(SECOND_VALUE);
            expect(queue.queue[1]).toBeUndefined();
        });

        it("Should decrease in size", () => {
            queue.Enqueue(FIRST_VALUE);
            expect(queue.size).toEqual(1);
            queue.Dequeue();
            expect(queue.size).toEqual(0);
        });

        it("Should not decrease past 0", () => {
            queue.Enqueue(FIRST_VALUE);
            expect(queue.size).toEqual(1);
            queue.Dequeue();
            queue.Dequeue();
            expect(queue.size).toEqual(0);
        });

        it("Should return `null` if the queue is empty", () => {
            var value = queue.Dequeue();
            expect(value).toBeNull();
        });
    });

    describe("peek", () => {
        it("Should return the item at the front of the queue", () => {
            queue.Enqueue(FIRST_VALUE);
            queue.Enqueue(SECOND_VALUE);
            var value = queue.peek();
            expect(value).toEqual(FIRST_VALUE);
            expect(queue.queue[1]).toEqual(SECOND_VALUE);
        });

        it("Should not increase or decrease in size", () => {
            queue.Enqueue(FIRST_VALUE);
            queue.Enqueue(SECOND_VALUE);
            var value = queue.peek();
            expect(queue.size).toEqual(2);
        });

        it("Should return null if the stack is empty", () => {
            var value = queue.Dequeue();
            expect(value).toBeNull();
            expect(queue.size).toEqual(0);
        });
    });
});