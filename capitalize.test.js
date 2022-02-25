const capital  = require('./capitalize.js');

describe('Check the first letter', () => {
    test('first test', () => {
      expect(capital('hello')).toMatch('Hello');
    });
  });