// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let replacedMessage;
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  replacedMessage = message
    .split("")
    .map(function (char) {
      if (char.toLowerCase() != char.toUpperCase()) {
        if (char == char.toLowerCase()) {
          return alphabet[
            (alphabet.findIndex((el) => el == char) + 13) % alphabet.length
          ];
        } else {
          return alphabet[
            (alphabet.findIndex((el) => el == char.toLowerCase()) + 13) %
              alphabet.length
          ].toUpperCase();
        }
      } else {
        return char;
      }
    })
    .join("");
  return replacedMessage;
}

// function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//     return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
//   }