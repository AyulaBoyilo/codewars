// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let unique;
  let i = 2;
  let found = false;
  if (arr[0] != arr[1]) {
    if (arr[0] == arr[2]) {
      unique = arr[1];
    } else {
      unique = arr[0];
    }
  } else {
    do {
      if (arr[0] != arr[i]) {
        unique = arr[i];
        found = true;
      }
      i++;
    } while (!found);
  }
  return unique;
}
