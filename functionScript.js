// 1) Even or Odd
// Requirement
// Write an arrow function that takes a number and returns "Even" if the number is even, otherwise "Odd".
// Use the modulo operator.
// Sample test data
// check(4) → "Even"
// check(7) → "Odd"
// check(0) → "Even"

// const check=(number)=>{
// if (number%2===0)
//     {
//     console.log("The Even number is ",number)
// }
// else
// {
//     console.log("The Odd number is ",number)
// }
// };
// check(4)
// check(7)
// check(0)

//with return

// const check=(number)=>{
// if (number%2===0)
//     {
//     return"The Even number is ",number
// }
// else
// {
//     return "The Odd number is ",number
// }
// };
// const result1=check(4)
// const result2=check(7)
// const result3=check(0)

// console.log(result1)
// console.log(result2)
// console.log(result3)

// 2) Result Evaluator — Pass or Fail
// Requirement
// Write a function that takes student marks (0–100).
// Return:
// "Pass" if marks ≥ 50

// "Fail" if marks < 50

// If marks are outside 0–100, log "Invalid marks" and return null.
// Sample test data
// evaluateResult(75) → "Pass"
// evaluateResult(40) → "Fail"
// evaluateResult(120) → Invalid marks

// function evaluateResult(marks)
// {

//     if (marks<0 || marks>100){
//         console.log("invalid marks",marks)
//         return null
//         }
//     else if (marks>= 50){
//         return "pass"
// }
//     else if(marks < 50){
//         return "fail"

// }

// }
// let result1= evaluateResult(75)
// console.log(result1)

// 3) Maximum Finder — Largest of Three Numbers
// Requirement
// Write an arrow function that takes three numbers and returns the largest value.
// Do not use built-in math helpers.
// Sample test data
// findMax(10, 25, 15) → 25
// findMax(5, 3, 8) → 8
// findMax(9, 9, 2) → 9

// let findMax=(a,b,c)=>
//     {
//     if (a>=b && a>=c){
//         console.log("largenumber",a);}
//     else if (b>=a&& b>=c)
//     {
//       console.log("largenumber",b)
//     }
//     else {
//         console.log("largenumber",c)
//     }

//     }

// findMax(10,25,15)
// findMax(5, 3, 8)
// findMax(9, 9, 2)

// 4) Accumulator — Sum from 1 to N
// Requirement
// Write a function that takes a positive number n
// and returns the total sum from 1 to n using a loop.
// Sample test data
// sumToN(5) → 15
// sumToN(10) → 55

// function sumToN(n)

// {
//  let sum=0
//  for(let i=1;i<=n; i++){
//     sum=sum+i
//     console.log("Sum is",sum)
//  }
// }
// sumToN(5)
// sumToN(10)

// 5) Multiplication Table Generator
// Requirement
// Write a function that prints the multiplication table
//  of a given number from 1 to 10 using a loop.
// Sample test data

// function multiplicationTable(number){

//     for (let i=1;i<=10;i++)
//         {
//         console.log(number,"x",i,"=",i*number);
//     }

// }
//  multiplicationTable(3);

// 6) Digit Counter — Number Length Finder
// Requirement
// Write a function that counts how many digits exist in a
// number using a loop (no string conversion).
// Sample test data
// countDigits(1234) → 4
// countDigits(9) → 1
// countDigits(10000) → 5

// function countDigits(number) {
//     let count = 0;

//     while (number > 0) {
//         let separate = number % 10;

//         number = (number - separate) / 10;

//         count = count + 1;

//     }
// console.log("count is", count);
// }

// countDigits(1234);
// countDigits(9) ;
// countDigits(10000);

//  7) Number Reverser
// Requirement
// Write a function that reverses the digits
// of a number using mathematical operations.
// Sample test data
// reverseNumber(1234) → 4321
// reverseNumber(500) → 5
// reverseNumber(91) → 19

// function reverseNumber(number){
//     let reverse=0
//     while( number>0){
//         let lastDigitRemove=number%10;
//         reverse=(reverse*10+lastDigitRemove);
//         number=(number-lastDigitRemove)/10
//     }
//     console.log("Reverse number is", reverse);
// }
// reverseNumber(1234)
// reverseNumber(500)
// reverseNumber(91)

// 8) Factorial Engine
// Requirement
// Write a function that calculates the factorial of a number using a loop.
// Factorial rule:
// n! = n × (n-1) × ... × 1

// Sample test data
// factorial(5) → 120
// factorial(3) → 6
// factorial(1) → 1

//  function findFactorial(number) {
//      let factorial = 1;

//     while (number > 0) {

//         factorial = factorial * number;
//         number = number - 1;
//     }

//     console.log("Factorial is", factorial);
// }

// findFactorial(3);
// findFactorial(5);
// findFactorial(1) ;

// 9) Prime Validator
// Requirement
// Write a function that checks whether a number is prime.
// Return:
// true → prime

// false → not prime

// Use a loop to test divisibility.
// Sample test data
// isPrime(7) → true
// isPrime(10) → false
// isPrime(2) → true

// function isPrime(number) {
//
//     if (number <= 1) {
//         console.log("notprime");
//         return;
//     }

//     let divisor = 2;
//     let pointer = 0;

//     while (divisor < number) {
//         if (number % divisor == 0) {
//             pointer += 1;
//         }

//         divisor += 1;
//     }

//     if (pointer === 0) {
//         console.log(number," Number is Prime number");
//     } else {
//         console.log(number,"number is not Prime number");
//     }
// }

// isPrime(7);
// isPrime(10);
// isPrime(2);

// 10) Pattern Builder — Star Triangle
// Requirement
// Write a function that prints a star pattern
//  based on a number input using nested loops.
// Pattern format:
// *
// **
// ***
// ****

// Sample test data
// printPattern(4)

// Expected output:
// *
// **
// ***
// ****

// function printPattern(n) {

//     for (let i = 1; i <= n; i++) {
//         let row = "";

//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }

// printPattern(4);
