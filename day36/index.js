function Fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const series = Fibonacci(n - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);
  return series;
}

const n = Number(prompt("Enter a number:  "));
const fibonacciSeries = Fibonacci(n);
// for (let i = 0; i < fibonacciSeries.length; i++) {
//   console.log(fibonacciSeries[i]);
// }

fibonacciSeries.map((x) => console.log(x));

// palindrome

let str = "level";
let reverseStr = str.split("").reverse().join("");
if (str === reverseStr) {
  console.log(`${str} is palindrome`);
} else {
  console.log(`${str} is not palindrome`);
}

// function isPalindrome(str) {
//   const str1 = str.toLowerCase();
//   const str2 = str1.split("").reverse().join("");
//   return str1 === str2;
// }
// let toTest = "level";
// istest = isPalindrome(toTest);

// if (istest) {
//   console.log("palindrome");
// } else {
//   console.log("not palindrome");
// }
