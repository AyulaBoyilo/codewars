// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let words = x.split(" ");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let maxScore = 0;
  let highestWord = "";

  function scoreWord(word) {
    return word
      .split("")
      .reduce(
        (acc, char) => (acc += alphabet.findIndex((lett) => lett == char) + 1),
        0
      );
  }

  words.forEach((word) => {
    if (scoreWord(word) > maxScore) {
      maxScore = scoreWord(word);
      highestWord = word;
    }
  });

  return highestWord;
}

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }