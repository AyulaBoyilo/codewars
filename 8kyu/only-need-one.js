// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// ([66, 101], 66), true);
// [101, 45, 75, 105, 99, 107], 107), true);
// (check(['t', 'e', 's', 't'], 'e'), true);
// (check(['what', 'a', 'great', 'kata'], 'kat'), false);

const a = [66, 101];
const x = 66;

function check(a, x) {
    return a.some(el => el == x);
}

console.log(check(a, x));