import caesarCipher from '../src/caesarCipher';

describe('caesarCipher', () => {
  test('shifts letters correctly with a positive shift', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('handles punctuation, spaces, and other non-alphabetical characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('handles large shift factors', () => {
    // Shifting by 27 should be the same as shifting by 1
    expect(caesarCipher('abc', 27)).toBe('bcd');
  });

   test('handles negative shift factors', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc');
    // Wrapping backwards
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });

  test('handles zero shift factor', () => {
    expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
  });

  test('handles empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });
}); 