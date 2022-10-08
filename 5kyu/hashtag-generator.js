// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (str == "" || str.split("").every((el) => el == " ")) {
    return false;
  } else {
    let filteredArr = str.split(" ").filter((el) => el != " " && el != "");
    console.log(filteredArr);
    let res = ["#"];
    filteredArr.forEach((word) =>
      res.push(word[0].toUpperCase() + word.slice(1))
    );
    if (res.join("").length > 140) {
      return false;
    } else {
      return res.join("");
    }
  }
}


// function generateHashtag (str) {
//     return str.length > 140 || str === '' ? false :
//       '#' + str.split(' ').map(capitalize).join('');
//   }
  
//   function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }

// function generateHashtag (str) {

//     var hashtag = str.split(' ').reduce(function(tag, word) {
//       return tag + word.charAt(0).toUpperCase() + word.substring(1);
//     }, '#');
    
//     return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
//   }