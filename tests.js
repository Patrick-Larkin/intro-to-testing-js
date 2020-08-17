// Unit tests for the helloWorld function
const randomNumber = Math.ceil(Math.random() * 100);
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('addOne', function() {
    it('should be a defined function', function() {
        expect(typeof addOne).toBe('function');
    });
    it('should return a number when passed a number', function() {
         expect(typeof addOne(randomNumber)).toBe( 'number');
    });
    it('should return a number 1 greater than the input', function () {
        expect(addOne(randomNumber)).toBe(randomNumber + 1)
    });
    it('should return -4 when passed "-5"', function () {
        expect(addOne("-5")).toBe(-4)
    });
    // it('should return the string "Hello, World!" when executed', function() {
    //     expect(helloWorld()).toBe("Hello, World!");
    // });
    // it("should never return 'undefined' when called", function() {
    //     expect(helloWorld()).not.toBe(undefined);
    // });
});