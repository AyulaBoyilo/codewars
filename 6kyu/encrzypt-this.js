// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  let result = [];
  if (text.length > 1) {
    text.split(" ").forEach((word) => {
      if (word.length == 1) {
        result.push(word.charCodeAt(0));
      } else if (word.length == 2) {
        result.push(word.charCodeAt(0) + word.charAt(word.length - 1));
      } else {
        result.push(
          word.charCodeAt(0) +
            word.charAt(word.length - 1) +
            word.slice(2, word.length - 1) +
            word.charAt(1)
        );
      }
    });
  } else {
    return text.charCodeAt(0) + "";
  }
  return result.join(" ");
};

// const encryptThis=a=>a.split` `.map(a=>a.replace(/(^.)(.)(.*)(.$)/,'$1$4$3$2').replace(/^./,a=>a.charCodeAt())).join` `

// const encryptWord = w => {
//     const first = w.charCodeAt(0);
//     let res;
//     switch (w.length) {
//       case 0: return '';
//       case 1: return first;
//       case 2: res = [first, w[1]]; break;
//       case 3: res = [first, w[2], w[1]]; break;
//       default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
//     }
//     return res.join('');
//   };
  
//   const encryptThis = text => text.split(' ').map(encryptWord).join(' ');