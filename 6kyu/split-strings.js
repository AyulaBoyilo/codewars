// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
// REGULAR EXPRESSIONSSTRINGSALGORITHMS

function solution(str) {
  let tempStr;
  let res = [];
  if (str.length % 2 == 1) {
    tempStr = str + "_";
  } else {
    tempStr = str;
  }
  if (tempStr.length > 1) {
    for (let i = 0; i <= tempStr.length - 2; i += 2) {
      res.push(tempStr[i] + tempStr[i + 1]);
    }
  }
  return res;
}

// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
//  }