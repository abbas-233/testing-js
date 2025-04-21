function reverseString(string) {
  if (typeof string !== 'string') {
    return ''; // Or throw an error, depending on desired behavior
  }
  return string.split('').reverse().join('');
}

export default reverseString; 