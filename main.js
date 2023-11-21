function rot13(str) {
  // Create a function to perform ROT13 transformation on a single character
  function rot13Char(char) {
    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Get the ASCII code for the character
      const charCode = char.charCodeAt(0);
      // Perform the ROT13 transformation (shift by 13 positions)
      // A (65) to M (77), N (78) to Z (90)
      if (charCode >= 65 && charCode <= 77) {
        return String.fromCharCode(charCode + 13);
      } else {
        return String.fromCharCode(charCode - 13);
      }
    } else {
      // Non-alphabetic characters remain unchanged
      return char;
    }
  }

  // Use the rot13Char function to transform each character in the input string
  const decodedArray = str.split('').map(rot13Char);
  // Join the array back into a string
  const decodedStr = decodedArray.join('');
  return decodedStr;
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // Output: FREE PIZZA!
console.log(rot13("SERR YBIR?")); // Output: FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // Output: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.