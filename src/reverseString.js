function reverseString(str) {
  if(typeof str !== 'string') {
    return "Please provide a string!";
  }
  return str.split("").reverse().join("");
}

export default reverseString;
