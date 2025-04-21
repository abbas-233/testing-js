function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  // Handle uppercase letters
  if (code >= 65 && code <= 90) { // A-Z
    // Ensure shift is within 0-25 range
    const effectiveShift = ((shift % 26) + 26) % 26;
    let shiftedCode = code + effectiveShift;
    if (shiftedCode > 90) {
      shiftedCode = shiftedCode - 26;
    }
    return String.fromCharCode(shiftedCode);
  }
  // Handle lowercase letters
  else if (code >= 97 && code <= 122) { // a-z
    const effectiveShift = ((shift % 26) + 26) % 26;
    let shiftedCode = code + effectiveShift;
    if (shiftedCode > 122) {
      shiftedCode = shiftedCode - 26;
    }
    return String.fromCharCode(shiftedCode);
  }
  // Return non-alphabetic characters unchanged
  else {
    return char;
  }
}

function caesarCipher(string, shiftFactor) {
  if (typeof string !== 'string') return '';
  // Ensure shiftFactor is an integer
  const shift = parseInt(shiftFactor, 10);
  if (isNaN(shift)) return string; // Or handle error appropriately

  return string
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');
}

export default caesarCipher; 