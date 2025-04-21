const calculator = {
  add: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a - b;
  },
  multiply: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a * b;
  },
  divide: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    if (b === 0) {
        // Handling division by zero as per standard JavaScript behavior
        return a === 0 ? NaN : (a > 0 ? Infinity : -Infinity);
    }
    return a / b;
  },
};

export default calculator; 