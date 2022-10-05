// DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(arr) {
  if (!arr) {
    return 0;
  } else {
    return calculate([0, arr[0], arr[1]]);
  }
}
function one(arr) {
  if (!arr) {
    return 1;
  } else {
    return calculate([1, arr[0], arr[1]]);
  }
}
function two(arr) {
  if (!arr) {
    return 2;
  } else {
    return calculate([2, arr[0], arr[1]]);
  }
}
function three(arr) {
  if (!arr) {
    return 3;
  } else {
    return calculate([3, arr[0], arr[1]]);
  }
}
function four(arr) {
  if (!arr) {
    return 4;
  } else {
    return calculate([4, arr[0], arr[1]]);
  }
}
function five(arr) {
  if (!arr) {
    return 5;
  } else {
    return calculate([5, arr[0], arr[1]]);
  }
}
function six(arr) {
  if (!arr) {
    return 6;
  } else {
    return calculate([6, arr[0], arr[1]]);
  }
}
function seven(arr) {
  if (!arr) {
    return 7;
  } else {
    return calculate([7, arr[0], arr[1]]);
  }
}
function eight(arr) {
  if (!arr) {
    return 8;
  } else {
    return calculate([8, arr[0], arr[1]]);
  }
}
function nine(arr) {
  if (!arr) {
    return 9;
  } else {
    return calculate([9, arr[0], arr[1]]);
  }
}

function plus(num) {
  return ["+", num];
}
function minus(num) {
  return ["-", num];
}
function times(num) {
  return ["*", num];
}
function dividedBy(num) {
  return ["/", num];
}

function calculate(eq) {
  let res;
  if (eq[1] == "*") {
    res = eq[0] * eq[2];
    return res;
  } else if (eq[1] == "/") {
    res = Math.floor(eq[0] / eq[2]);
    return res;
  } else if (eq[1] == "+") {
    res = eq[0] + eq[2];
    return res;
  } else {
    res = eq[0] - eq[2];
    return res;
  }
}

// var n = function(digit) {
// return function(op) {
//     return op ? op(digit) : digit;
// }
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);

// function plus(r) { return function(l) { return l + r; }; }
// function minus(r) { return function(l) { return l - r; }; }
// function times(r) { return function(l) { return l * r; }; }
// function dividedBy(r) { return function(l) { return l / r; }; }

// ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// .forEach(function (name, n) {
//   this[name] = function (f) { return f ? f(n) : n }
// });

// function plus(n)      { return function (a) { return a + n } }
// function minus(n)     { return function (a) { return a - n } }
// function times(n)     { return function (a) { return a * n } }
// function dividedBy(n) { return function (a) { return a / n } }