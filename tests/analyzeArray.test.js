import analyzeArray from '../src/analyzeArray';

describe('analyzeArray', () => {
  test('returns correct object for a simple array', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('returns correct object for an array with negative numbers', () => {
    const object = analyzeArray([-1, -8, -3, -4, -2, -6]);
    expect(object).toEqual({
      average: -4, 
      min: -8,
      max: -1,
      length: 6,
    });
  });

  test('returns correct object for an array with mixed numbers', () => {
    const object = analyzeArray([-1, 8, 3, -4, 2, 0]);
    expect(object).toEqual({
      average: 1.3333333333333333, // Or use toBeCloseTo for float comparison
      min: -4,
      max: 8,
      length: 6,
    });
  });

  test('returns correct object for an array with one element', () => {
    const object = analyzeArray([5]);
    expect(object).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test('handles empty array', () => {
    const object = analyzeArray([]);
    expect(object).toEqual({
      average: NaN, // Average of empty set is undefined/NaN
      min: Infinity, // Standard min of empty set
      max: -Infinity, // Standard max of empty set
      length: 0,
    });
  });

  test('handles array with non-number elements (optional: based on requirements)', () => {
    // Option 1: Filter out non-numbers
    // const object = analyzeArray([1, 'a', 3, null, 5, undefined]);
    // expect(object).toEqual({ average: 3, min: 1, max: 5, length: 3 });

    // Option 2: Throw an error or return specific error object
     expect(() => analyzeArray([1, 'a', 3])).toThrow(); // Example: Expect an error

    // Option 3: Return NaN/Infinity where calculation fails
    // const object = analyzeArray([1, 'a', 3]);
    // expect(object.average).toBeNaN();
  });
}); 