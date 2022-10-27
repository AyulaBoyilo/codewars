// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// ARRAYSSTRINGSREGULAR EXPRESSIONSFUNDAMENTALS

function encode(string) {
  return string
    .split("")
    .map((char) => {
      switch (char) {
        case "a":
          char = "1";
          break;
        case "e":
          char = "2";
          break;
        case "i":
          char = "3";
          break;
        case "o":
          char = "4";
          break;
        case "u":
          char = "5";
          break;
        default:
      }
      return char;
    })
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((char) => {
      switch (char) {
        case "1":
          char = "a";
          break;
        case "2":
          char = "e";
          break;
        case "3":
          char = "i";
          break;
        case "4":
          char = "o";
          break;
        case "5":
          char = "u";
          break;
        default:
      }
      return char;
    })
    .join("");
}
