// DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
  let openParens = 0;
  parens.split("").every((par) => {
    par === "(" ? openParens++ : openParens--;
    if (openParens < 0) {
      return false;
    }
    return true;
  });
  if (openParens === 0) {
    return true;
  } else {
    return false;
  }
}


// function validParentheses(parens){
//     var n = 0;
//     for (var i = 0; i < parens.length; i++) {
//       if (parens[i] == '(') n++;
//       if (parens[i] == ')') n--;
//       if (n < 0) return false;
//     }
    
//     return n == 0;
//   }

// // I had something that was smaller and looked cooler, but
// // this is how you'd want to write an actual parser.
// function validParentheses(string){
//     var tokenizer = /[()]/g, // ignores characters in between; parentheses are
//         count = 0,           // pretty useless if they're not grouping *something*
//         token;
//     while(token = tokenizer.exec(string), token !== null){
//        if(token == "(") {
//           count++;
//        } else if(token == ")") {
//           count--;
//           if(count < 0) {
//              return false;
//           }
//        }
//     }
//     return count == 0;
//  }