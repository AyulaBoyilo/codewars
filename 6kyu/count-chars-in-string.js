// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  if (string != "") {
    let result = {};
    string.split("").map((lett) => {
      if (result[lett]) {
        result[lett]++;
      } else {
        result[lett] = 0;
        result[lett]++;
      }
    });
    return result;
  }
  return {};
}

// function count (string) {  
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }