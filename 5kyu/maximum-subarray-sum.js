// DESCRIPTION:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
  let maxSum = 0;
  if (arr.every((el) => el > 0)) {
    return arr.reduce((acc, curr) => (acc += curr), 0);
  } else if (arr.every((el) => el < 0)) {
    return maxSum;
  } else {
    arr.forEach((num, index) => {
      for (let curr = index + 1; curr <= arr.length; curr++) {
        let currMax = arr
          .slice(index, curr)
          .reduce((acc, curr) => (acc += curr), 0);
        if (currMax > maxSum) {
          maxSum = currMax;
        }
      }
    });
    return maxSum;
  }
};

// var maxSequence = function (arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// };