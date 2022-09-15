// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  let result = text;
  let tempText = result;
  if (text == null || text == "" || n < 1) {
    return text;
  } else {
    for (i = 0; i < n; i++) {
      tempText = result;
      result =
        tempText.split("").reduce(function (acc, curr, ind) {
          if (ind % 2 != 0) {
            acc += curr;
          }
          return acc;
        }, "") +
        tempText.split("").reduce(function (acc, curr, ind) {
          if (ind % 2 == 0) {
            acc += curr;
          }
          return acc;
        }, "");
    }
  }
  return result;
}

function decrypt(encryptedText, n) {
  result = encryptedText;
  if (result == null || result == "" || n < 1) {
    return result;
  } else {
    for (i = 0; i < n; i++) {
      let firstHalf = result.split("").slice(0, Math.floor(result.length / 2));
      let secondHalf = result.split("").slice(Math.floor(result.length / 2));
      console.log(firstHalf, secondHalf);
      result = "";
      for (j = 0; j <= Math.floor(encryptedText.length / 2); j++) {
        if (secondHalf[j]) {
          result += secondHalf[j];
        }
        if (firstHalf[j]) {
          result += firstHalf[j];
        }
      }
    }
  }
  return result;
}

// function encrypt(text, n) {
//     for (let i = 0; i < n; i++) {
//       text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
//     }
//     return text
//   }
  
//   function decrypt(text, n) {
//     let l = text && text.length / 2 | 0
//     for (let i = 0; i < n; i++) {
//       text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
//     }
//     return text
//   }

//   function encrypt(text, n=0) {
//     return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
//   }
  
//   function decrypt(text, n) {
//     return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
//   }