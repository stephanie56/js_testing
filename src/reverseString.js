function reverseString(str) {
  if(typeof str !== 'string') {
    throw new Error("Error: need to provide a string.");
  }
  return str.split("").reverse().join("");
}

export default reverseString;
