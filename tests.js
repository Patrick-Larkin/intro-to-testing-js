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

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    // it('should return a string when passed a name', function () {
    //     expect(sayHello(myName)).toBe('Hello, ' + myName);
    // });
    it('returns a string if input === true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('input is not null', function() {
        expect(typeof input).toBe('boolean');
    });
    // it('should return false when passed a number ' + randomNumber, function() {
    //     expect(isBoolean(randomNumber)).toBe(false);
    // });
    // it('should return false when passed no inputs (undefined) ', function() {
    //     expect(isBoolean()).toBe(false);
    // });
    // it('should return false when passed null', function() {
    //     expect(isBoolean(null)).toBe(false);
    // });
    // it('should return false when passed an array', function() {
    //     expect(isBoolean(exampleArray)).toBe(false);
    // });
});

    // the input is an empty string like ""?
    // the input is a number like 2.3?
    // the input is a number inside a string like "5"?
    // the input is another data type like an array, object, or function?