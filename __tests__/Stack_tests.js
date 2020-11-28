var Stack = require('../exercises/Stack');

describe("Stack", () => {
    const FIRST_VALUE = 6;
    const SECOND_VALUE = 7;

    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    afterEach(() => { stack = null; });

    describe("push", () => {
        it('Should create the first item of the stack', () => {
            stack.push(FIRST_VALUE);
            expect(stack.stack[0]).toEqual(FIRST_VALUE);
        });

        it('Should add an item to the top of the stack', () => {
            stack.push(FIRST_VALUE);
            stack.push(SECOND_VALUE);
            expect(stack.stack[0]).toEqual(FIRST_VALUE);
            expect(stack.stack[1]).toEqual(SECOND_VALUE);
        });

        it('Should increase in size', () => {
            expect(stack.size).toEqual(0);
            stack.push(FIRST_VALUE);
            expect(stack.size).toEqual(1);
        });
    });

    describe("pop", () => {
        it('Should remove and return an item from the stack', () => {
            stack.push(FIRST_VALUE);
            expect(stack.stack[0]).toEqual(FIRST_VALUE);
            var value = stack.pop();
            expect(stack.stack[0]).toBeNull();
            expect(value).toEqual(FIRST_VALUE);
        });

        it("Should remove and return the top item from the stack", () => {
            stack.push(FIRST_VALUE);
            stack.push(SECOND_VALUE);
            var value = stack.pop();
            expect(value).toEqual(SECOND_VALUE);
            expect(stack.stack[0]).toEqual(FIRST_VALUE);
            expect(stack.stack[1]).toBeNull();
        });

        it("Should decrease in size", () => {
            stack.push(FIRST_VALUE);
            expect(stack.size).toEqual(1);
            stack.pop();
            expect(stack.size).toEqual(0);
        });

        it("Should not decrease past 0", () => {
            stack.push(FIRST_VALUE);
            expect(stack.size).toEqual(1);
            stack.pop();
            stack.pop();
            expect(stack.size).toEqual(0);
        });

        it("Should return `null` if the stack is empty", () => {
            var value = stack.pop();
            expect(value).toBeNull();
        });
    });

    describe("peek", () => {
        it("Should return the item on top of the stack", () => {
            stack.push(FIRST_VALUE);
            stack.push(SECOND_VALUE);
            var value = stack.peek();
            expect(value).toEqual(SECOND_VALUE);
            expect(stack.stack[1]).toEqual(SECOND_VALUE);
        });

        it("Should not increase or decrease in size", () => {
            stack.push(FIRST_VALUE);
            stack.push(SECOND_VALUE);
            var value = stack.peek();
            expect(stack.size).toEqual(2);
        });

        it("Should return null if the stack is empty", () => {
            var value = stack.pop();
            expect(value).toBeNull();
            expect(stack.size).toEqual(0);
        });
    });
});