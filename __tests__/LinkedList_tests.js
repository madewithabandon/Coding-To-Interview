const LinkedList = require("../exercises/LinkedList");

describe('LinkedList tests', () => {
    const FIRST_VALUE = 6;
    const SECOND_VALUE = 7;
    const THIRD_VALUE = 8;
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });
    afterEach(() => {
        list = null;
    });

    it('Should be an empty LinkedList', () => {
        expect(list.head).toBeNull()
    })

    
    describe('add', () => {
        
        it('Should add an element to the list', () => {
            list.add(FIRST_VALUE);
            expect(list.head).not.toBeNull();
            expect(list.head.value).toEqual(FIRST_VALUE);
            expect(list.size).toEqual(1);
        });
    
        it('Should add a second element to the list', () => {
            list.add(FIRST_VALUE);
            list.add(SECOND_VALUE);
            expect(list.head).not.toBeNull();
            expect(list.head.next.value).toEqual(SECOND_VALUE);
            expect(list.size).toEqual(2);

        });

        it('Should add a third element to the list', () => {
            list.add(FIRST_VALUE);
            list.add(SECOND_VALUE);
            list.add(THIRD_VALUE);
            expect(list.head).not.toBeNull();
            expect(list.head.value).toEqual(FIRST_VALUE);
            expect(list.head.next.value).toEqual(SECOND_VALUE);
            expect(list.head.next.next.value).toEqual(THIRD_VALUE);
            expect(list.size).toEqual(3);
        });
        
        it('Extra Credit: Should call add as a chainable function', () => {
            list.add(FIRST_VALUE).add(SECOND_VALUE).add(THIRD_VALUE)
            expect(list.size).toEqual(3);
        });

        it('Extra Credit: Should have a tail', () => {
            list.add(FIRST_VALUE);
            list.add(SECOND_VALUE);
            list.add(THIRD_VALUE);
            expect(list.tail.value).toEqual(THIRD_VALUE);
        });

        it('Extra Credit: Should have `previous` nodes', () => {
            list.add(FIRST_VALUE);
            list.add(SECOND_VALUE);
            expect(list.head.next.previous.value).toEqual(FIRST_VALUE);
        });
    });

    describe('remove', () => {
        beforeEach(() => {
            list.add(FIRST_VALUE);
            list.add(SECOND_VALUE);
            list.add(THIRD_VALUE);
        });

        it('Should remove the last element of the list', () => {
            list.remove(THIRD_VALUE);
            expect(list.head.next.next).toBeNull();
            expect(list.size).toEqual(2);
        });

        it('Should remove the middle element of the list', () => {
            list.remove(SECOND_VALUE);
            expect(list.head.next.value).toEqual(THIRD_VALUE);
            expect(list.size).toEqual(2);
        });

        it('Should remove the first element of the list', () => {
            list.remove(FIRST_VALUE);
            expect(list.head.value).toEqual(SECOND_VALUE);
            expect(list.size).toEqual(2);
        });

        it('Should throw when not element to remove doesn\'t exist', () => {
            expect(() => {
                list.remove(10);
            }).toThrow();
        });

        it('Should remove all of the elements of the list', () => {
            expect(list.size).toEqual(3);
            list.remove(FIRST_VALUE);
            list.remove(SECOND_VALUE);
            list.remove(THIRD_VALUE);
            expect(list.size).toEqual(0);
            expect(list.head).toBeNull();
        });

        it('Should make the call chainable', () => {
            list.remove(FIRST_VALUE).remove(SECOND_VALUE);
            expect(list.size).toEqual(1);
            expect(list.head.next).toBeNull();
            expect(list.head.value).toEqual(THIRD_VALUE);
        })

        it('Should remove with previous', () => {
            list.remove(SECOND_VALUE);
            expect(list.head.next.previous.value).toEqual(FIRST_VALUE);
        })
    });

    describe('reverse', () => {
        beforeEach(() => {
            list.add(FIRST_VALUE);
            list.add(SECOND_VALUE);
            list.add(THIRD_VALUE);
        });

        it('Should reverse the list', () => {
            list.reverse();
            expect(list.head.value).toEqual(THIRD_VALUE);
            expect(list.head.next.value).toEqual(SECOND_VALUE);
            expect(list.head.next.next.value).toEqual(FIRST_VALUE);
        });

        it('Extra Credit: Should reverse the list with a tail', () => {
            list.reverse();
            expect(list.tail.value).toEqual(FIRST_VALUE);
        })
    });

});

