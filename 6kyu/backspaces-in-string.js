// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
// FUNDAMENTALSSTRINGSALGORITHMS

function cleanString(s) {
  let res = [];
  s.split("").forEach((char) => (char == "#" ? res.pop() : res.push(char)));
  return res.join("");
}

// function cleanString(s) {
//   let result = [];
//   [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
//   return result.join("");
// }
