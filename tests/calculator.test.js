import calculator from '../src/calculator';

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 2)).toBe(1);
    expect(calculator.add(-1, -2)).toBe(-3);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(1.5, 2.5)).toBe(4);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.subtract(2, 5)).toBe(-3);
    expect(calculator.subtract(-1, 2)).toBe(-3);
    expect(calculator.subtract(-1, -2)).toBe(1);
    expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-3, 4)).toBe(-12);
    expect(calculator.multiply(-3, -4)).toBe(12);
    expect(calculator.multiply(0, 10)).toBe(0);
    expect(calculator.multiply(1.5, 2)).toBe(3);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(-10, 2)).toBe(-5);
    expect(calculator.divide(-10, -2)).toBe(5);
    expect(calculator.divide(5, 2)).toBe(2.5);
  });

  test('handles division by zero', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity); // Or expect(() => calculator.divide(10, 0)).toThrow();
    expect(calculator.divide(0, 0)).toBeNaN(); // Division of 0 by 0 is NaN
  });
}); 