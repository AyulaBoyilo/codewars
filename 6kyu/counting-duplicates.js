// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let duplicates = 0;
  const textArray = text.toLowerCase().split("");
  const textSet = new Set(textArray);

  textSet.forEach((char) => {
    if (textArray.filter((ch) => ch == char).length > 1) {
      duplicates++;
    }
  });
  return duplicates;
}

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
//   }

// function duplicateCount(text){
//     var count = text.toLowerCase().split('').reduce((accum, curr) => {
//       accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
//       return accum;
//     }, {});
//     return Object.keys(count).filter(key => count[key] > 1).length;
//   }