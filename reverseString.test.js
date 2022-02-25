const reverse = require('./reverseString.js');
describe('Reverse String Method',() =>{
test('Test string 1', () => {
    expect(reverse('amin')).toBe('nima');
});
test('Test string 2', () => {
    expect(reverse('Hi')).toBe('iH');
});
test('Test string 3 empty', () => {
    expect(reverse('')).toBe('');
});
})