import capitalize from '../src/capitalize';

test('capitalizes the first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
}); 