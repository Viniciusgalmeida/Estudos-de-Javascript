// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
    // Find the number of extra characters in the original string that are not in the ending string
    let strExtraCharacters = str.length - ending.length;
  
    // Create a new string that starts at the end of the original string, using the number of extra characters as the starting index
    let newStr = str.slice(strExtraCharacters);
  
    // Compare the new string to the ending string
    if (newStr == ending) {
      // If they match, return true
      return true;
    } else {
      // If they don't match, return false
      return false;
    }
  }
  