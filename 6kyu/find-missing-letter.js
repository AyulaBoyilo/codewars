// DESCRIPTION:
// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  const alphabet = [
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
  let testArray = alphabet.slice(
    alphabet.findIndex((el) => el == array[0].toLowerCase()),
    alphabet.findIndex((el) => el == array[array.length - 1].toLowerCase())
  );
  let res = "";

  testArray.forEach((char) => {
    if (array.findIndex((el) => el.toLowerCase() == char) == -1) {
      if (array[0].toUpperCase() == array[0]) {
        res = char;
        res = res.toUpperCase();
      } else {
        res = char;
      }
      console.log(char, res);
    }
  });

  return res;
}

// function findMissingLetter(array) {
//     let first = array[0].charCodeAt(0)
//     for (let i = 1; i < array.length; i++) {
//       if (first + i !== array[i].charCodeAt(0)) {
//         return String.fromCharCode(first + i)
//       }
//     }
//     throw new Error("Invalid input")
//   }

// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }