// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let acc = 0;
  str.split("").forEach((curr) => {
    if (
      curr == "a" ||
      curr == "e" ||
      curr == "i" ||
      curr == "o" ||
      curr == "u"
    ) {
      acc++;
    }
  });
  return acc;
}

// function getCount(str) {
//   return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }

// function getCount(str) {
//   return str.replace(/[^aeiou]/gi, "").length;
// }
