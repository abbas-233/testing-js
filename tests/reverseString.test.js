import reverseString from '../src/reverseString';

test('reverses a simple string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses a string with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverses a string with numbers and symbols', () => {
  expect(reverseString('123!@#')).toBe('#@!321');
});

test('reverses an empty string', () => {
  expect(reverseString('')).toBe('');
}); 