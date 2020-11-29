// `require` pulls in the module from the file with your Queue
var Queue = require('../exercises/Queue');

// `describe` sets up the description of your test. `describe` can be 
describe("Queue", () => {

    // `describe` functions can be layered
    describe("Enqueue", () => {

        // `it` is the actual test. The first parameter should describe what you are testing
        it("Should be true", () => {
            
            // `expect` is provided by the test framework `Jest`. Check out the api for more info https://jestjs.io/docs/en/api
            expect(true).toBeTruthy();
        })
    })
});