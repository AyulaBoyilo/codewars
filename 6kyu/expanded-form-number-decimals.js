// Write Number in Expanded Form - Part 2
// This is version 2 of my 'Write Number in Exanded Form' Kata.

// You will be given a number and you will need to return it as a string in expanded form :

// expanded form illustration

// For example:

// expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
// expanded_from(1.24); // should return "1 + 2/10 + 4/100"
// expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
// expanded_from(0.04); // should return "4/100"

function expandedForm(num) {
  let whole = num
    .toString()
    .split(".")[0]
    .toString()
    .split("")
    .map((n, i) => n * 10 ** (num.toString().split(".")[0].length - 1 - i))
    .filter((x) => x != 0)
    .join(" + ");
  let decimal = num
    .toString()
    .split(".")[1]
    .toString()
    .split("")
    .map((n, i) => n + "/" + 10 ** (i + 1))
    .filter((x) => x[0] != 0)
    .join(" + ");

  return whole == "" ? decimal : whole + " + " + decimal;
}

// function expandedForm(num) {
//     var [int, dec] = (''+num).split('.')
  
//     return int.split('').map((x, y, a) => x + '0'.repeat(a.length - y - 1))
//       .concat(dec.split('').map((x, y, a) => `${x}/1${'0'.repeat(y + 1)}`))
//       .filter(x => !x.startsWith('0'))
//       .join(' + ')
//   }
