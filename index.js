// function getFactorial(n) {
//   if (n < 0) {
//     // Selection
//     return;
//   }
//   let factorial = 1; // Sequencing (see above and below)
//   for (let i = 1; i <= n; i++) {
//     // Iteration
//     factorial *= i;
//   }
//   console.log(factorial);
// }

// getFactorial(7);

function binaryToDecimal() {
  const binary = "01101110";
  let decimal = 0;
  for (let i = 0; i <= 7; i++) {
    if (binary[i] == "1") {
      decimal += 2 ** (7 - i);
    }
  }
  console.log(decimal);
}

binaryToDecimal();
