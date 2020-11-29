const Tree = require('../exercises/BinaryTree');

describe('BinaryTree', () => {
    const BIG_TREE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    var tree;
    beforeEach(() => {
        tree = new Tree();
    });
    afterEach(() => {
        tree = null;
    })

    describe('preorder', () => {
        it ("should return null", () => {
            var value = tree.preOrderTraversal();
            expect(value).toBeNull();
        })
        it("Should return an array in pre-order", () => {
            createTree(BIG_TREE);
            var result = tree.preOrderTraversal();
            expect(result).toEqual([1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14, 15]);
        })
    })

    describe('inorder', () => {
        it ("should return null", () => {
            var value = tree.inOrderTraversal();
            expect(value).toBeNull();
        })
        it("Should return an array in order", () => {
            createTree(BIG_TREE);
            var result = tree.inOrderTraversal();
            expect(result).toEqual([8, 4, 9, 10, 5, 11, 2, 1, 12, 6, 13, 3, 14, 7, 15])
        })
    })

    describe('postorder', () => {
        it ("should return null", () => {
            var value = tree.postOrderTraversal();
            expect(value).toBeNull();
        })
        it("Should return an array in post-order", () => {
            createTree(BIG_TREE);
            var result = tree.postOrderTraversal();
            expect(result).toEqual([8,9,10,11,4,5,2,12,13,14,15,6,7,3,1])
        })
    })

});


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createTree(values) {
    // Make Nodes from the values.
    for (let i = 0; i < values.length; ++i) {
        values[i] = new Node(values[i]);
    }

    // Create the tree
    for (let i = 0; i < values.length; ++i) {
        var left = i * 2;
        var right = (i * 2) + 1;
        values[node].left = values[left];
        values[node].right = values[right];
    }
}