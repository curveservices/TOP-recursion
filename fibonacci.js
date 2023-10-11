// Using iteration
function fibs(n) {
    let results = [];
    if (n >= 1) {
        results.push(0);
    } 
    if (n >= 2) {
        results.push(1);
    }
    for (let i = 2; i < n; i++) {
        const nextFib = results[i - 1] + results[i - 2];
        results.push(nextFib);
    }
    return results
}
console.log('Fibonacci Iteration ', fibs(8))
document.querySelector('.fibonacci-interation').textContent = 
`Iteration  = ${fibs(8)}`;

//Using recursive
function fibsRec(n) {
    if (n == 1 || n == 0) {
      return n;
    } else {
      return fibsRec(n - 1) + fibsRec(n - 2);
    }
  }
  console.log('Fibonacci Recursive', fibs(8))
  document.querySelector('.fibonacci-recursive').textContent = 
    `Recursive = ${fibsRec(7)}`;

function fibsRecursive(n) {
    return n <= 1 ? n : fibsRecursive(n - 1) + fibsRecursive(n - 2);
}
console.log('Fibonacci Recursive one line of code', fibs(8))
document.querySelector('.fibonacci-recursive2').textContent = 
    `Recursive One line of code = ${fibsRecursive(7)}`;




