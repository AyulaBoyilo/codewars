// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  return s
    .split(" ")
    .reduce(
      (acc, curr) => (curr.length < acc ? (acc = curr.length) : acc),
      Infinity
    );
}


// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
// }