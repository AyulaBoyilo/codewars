// DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
// PARSING REGULAR EXPRESSIONS

function domainName(url) {
  console.log(url);
  if (url.includes("www.")) {
    let regex = /(?<=.*www\.)(.*)(?=\.)/g;
    return url.match(regex)[0].split(".")[0];
  } else if (url.includes("://")) {
    let regex = /(?<=.*\/\/)(.*)(?=\.)/g;
    return url.match(regex)[0].split(".")[0];
  } else {
    let regex = /(.*)(?=\.)/g;
    return url.match(regex)[0].split(".")[0];
  }
}

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };

// function domainName(url){
//     return url.replace(/(http:\/\/|https:\/\/)(www\.)?|www.?/g, '')
//                      .match(/[a-z\-0-9]{2,64}/g)[0];
//   }