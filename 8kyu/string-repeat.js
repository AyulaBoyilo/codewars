// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// const n = 3;
// const s = '*';

function repeatStr (n, s) {
    let sum = '';
    for(i = 0; i < n ; i++){
      sum += s;
    }
    return sum;
}

// function repeatStr (n, s) {
//     return s.repeat(n);
// }

console.log(repeatStr(n, s));