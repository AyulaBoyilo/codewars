// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const myArray = [1, -4, 7, 12];

function positiveSum(arr) {
    return arr.reduce((a, b) => b > 0 ? a += b : a, 0)
}

console.log(positiveSum(myArray));