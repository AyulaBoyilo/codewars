// DESCRIPTION:
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// FUNDAMENTALSALGORITHMSSTRINGS

String.prototype.camelCase = function () {
  if (this != "") {
    return this.trim()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("");
  } else {
    return "";
  }
};

// String.prototype.camelCase=function(){
//     return this.split(' ').map(function(word){
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    }).join('');
//  }

// String.prototype.camelCase = function () {
//     return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
//   }