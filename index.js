function getFactorial(n) {
  if (n < 0) {
    // Selection
    return;
  }
  let factorial = 1; // Sequencing (see above and below)
  for (let i = 1; i <= n; i++) {
    // Iteration
    factorial *= i;
  }
  console.log(factorial);
}

getFactorial(7);
