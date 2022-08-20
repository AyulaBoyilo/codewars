// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let letters = s.split("");
  let result = "";
  for (i = 0; i < letters.length; i++) {
    for (j = 0; j <= i; j++) {
      if (j == 0) {
        result += letters[i].toUpperCase();
      } else {
        result += letters[i].toLowerCase();
      }
    }
    if (i != letters.length - 1) {
      result += "-";
    }
  }
  return result;
}

// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }
