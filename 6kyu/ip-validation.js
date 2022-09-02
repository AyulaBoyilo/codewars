// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
  return (
    str.split(".").length == 4 &&
    str
      .split(".")
      .every(
        (x) =>
          Number(x) >= 0 &&
          Number(x) <= 255 &&
          ((x.length > 1 && x[0] != "0") || x.length == 1) &&
          /^\+?(0|[1-9]\d*)$/.test(x)
      )
  );
}

// function isValidIP(str) {
//     return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }

// const net = require('net');
// const isValidIP = (s) => net.isIP(s);

// function isValidIP(str) {
//     var p = str.split('.');
//     return p.length == 4 && p.every(function(s) {
//         return /^\d+$/.test(s) && s >= 0 && s <= 255;
//     });
// }
