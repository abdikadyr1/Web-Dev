//task1.Is "else" required? No difference

//task2.Rewrite the function using '?' or '||'
// Using a question mark operator '?':
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
//Using OR || (the shortest variant):
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//task3.Function min(a, b)
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  //task4.Function pow(x,n)
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
let x = prompt("x?", '');
let n = prompt("n?", '');
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }