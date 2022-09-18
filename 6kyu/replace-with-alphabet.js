// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter((x) => alphabetArr.find((el) => el == x))
    .map((char) =>
      alphabetArr.find((x) => x == char)
        ? alphabetArr.findIndex((x) => x == char) + 1
        : ""
    )
    .join(" ");
}

// function alphabetPosition(text) {
//     return text
//       .toUpperCase()
//       .match(/[a-z]/gi)
//       .map( (c) => c.charCodeAt() - 64)
//       .join(' ');
//   }