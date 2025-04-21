function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  if (arr.length === 0) {
    return {
      average: NaN,
      min: Infinity,
      max: -Infinity,
      length: 0,
    };
  }

  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  for (const num of arr) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Array must contain only numbers.');
    }
    sum += num;
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }

  const length = arr.length;
  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyzeArray; 