// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let found = true,
    string = str1.split("").reduce((object, item) => {
      if (!object[item]) {
        object[item] = 0;
      }
      object[item]++;
      return object;
    }, {}),
    word = str2.split("").reduce((object, item) => {
      if (!object[item]) {
        object[item] = 0;
      }
      object[item]++;
      return object;
    }, {});

  for (char in word) {
    if (string[char]) {
      if (string[char] < word[char]) {
        found = false;
      }
    } else {
      found = false;
    }
  }
  return found;
}
