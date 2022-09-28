// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  if (isNaN(strng[strng.length - 1])) {
    return strng + 1;
  } else {
    let i = 1;
    let numberArr = [];
    while (!isNaN(strng[strng.length - i])) {
      numberArr.unshift(strng[strng.length - i]);
      i++;
    }
    if (numberArr[0] != 0) {
      return (
        strng.slice(0, -numberArr.join("").length) +
        (Number(numberArr.join("")) + 1)
      );
    } else {
      return (
        strng.slice(0, -numberArr.join("").length) +
        (
          "0".repeat(numberArr.join("").length) +
          (Number(numberArr.join("")) + 1)
        ).slice(-numberArr.join("").length)
      );
    }
  }
}


// function incrementString(input) {
//     return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//         return +d + 1 + ns.replace(/9/g, '0');
//       });
//   }