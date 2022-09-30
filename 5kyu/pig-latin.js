// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word[0].toUpperCase() != word[0].toLowerCase()) {
        return word.slice(1) + word[0] + "ay";
      } else {
        return word;
      }
    })
    .join(" ");
}


// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }