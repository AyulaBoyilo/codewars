// DESCRIPTION:
// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  const hexToDecimal = (hex) => parseInt(hex, 16);
  let res = { r: 0, g: 0, b: 0 };
  res.r = hexToDecimal(hexString.slice(1, 3).toUpperCase());
  res.g = hexToDecimal(hexString.slice(3, 5).toUpperCase());
  res.b = hexToDecimal(hexString.slice(5).toUpperCase());
  return res;
}

// function hexStringToRGB(h) {
//     return {
//       r: parseInt(h.slice(1,3), 16),
//       g: parseInt(h.slice(3,5), 16),
//       b: parseInt(h.slice(5,7), 16)
//     };  
//   }