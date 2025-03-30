const functions = require('./functions');

test('Capitalize a string', () => {
    expect(functions.capitalize("keyboard")).toBe("Keyboard");
});

test('Reverse a string', () => {
    expect(functions.reverseString('hello')).toBe('olleh');
});

test('Add two numbers', () => {
    expect(functions.calculator.add(1,2)).toBe(3);
});

test('Subtract two numbers', () => {
    expect(functions.calculator.subtract(3,2)).toBe(1);
});

test('Multiply two numbers', () => {
    expect(functions.calculator.multiply(4,2)).toBe(8);
});

test('Divide two numbers', () => {
    expect(functions.calculator.divide(15,3)).toBe(5);
});

test('Caesar Cipher, text wrapping', () => {
    expect(functions.caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher, case preservation', () => {
    expect(functions.caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar Cipher, punctuation', () => {
    expect(functions.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze Array', () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }

    expect(functions.analyzeArray([1,8,3,4,2,6])).toEqual(object);
});