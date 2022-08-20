// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  let lowArr = str.toLowerCase().split("");
  let noDuplicate = true;
  lowArr.forEach((lett) => {
    if (lowArr.indexOf(lett) != lowArr.lastIndexOf(lett)) {
      noDuplicate = false;
    }
  });
  return noDuplicate;
}

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// function isIsogram(str) {
//     return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
// }