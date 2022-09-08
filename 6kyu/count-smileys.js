// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let smileys = 0;
  arr.forEach((smile) => {
    if (smile[0] == ";" || smile[0] == ":") {
      if (smile.length == 3 && (smile[1] == "-" || smile[1] == "~")) {
        if (smile[2] == ")" || smile[2] == "D") {
          smileys++;
        }
      } else {
        if (smile[1] == ")" || smile[1] == "D") {
          smileys++;
        }
      }
    }
  });
  return smileys;
}

// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//   }