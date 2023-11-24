const prompt = require(`prompt-sync`)();

/*1: Palindrome Checker
Write a program that prompts the user for a string and checks if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward. Ignore spaces, punctuation, and letter casing. Use conditional statements and loops to implement this behavior./
let userString = prompt(
  "put your string here and understand if it's a palindrome: "
);
function checkPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let newStr = lowerStr.split("");
  let reversedStr = [...newStr];
  let reversed = reversedStr.reverse();
  for (let i = 0; i < newStr.length; i++) {
    if (reversed[i] != newStr[i]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome(userString));*/

/*2: Fibonacci Sequence
//Write a program that prompts the user for a number and generates the Fibonacci sequence up to that number. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. Use a loop and conditional statements to generate the sequence.//

function fibonacciSequence(number) {
  let first = 0;
  let curentNumber = 1;
  let fibonacciSequence = [first, curentNumber];
  let sum;

  while (curentNumber < number) {
    sum = first + curentNumber;
    fibonacciSequence.push(sum);
    first = curentNumber;
    curentNumber = sum;
  }

  return fibonacciSequence;
}

let userNumber = Number(
  prompt(
    "Input a number and the program will generate the Fibonacci sequence up to that number: "
  )
);
console.log(fibonacciSequence(userNumber));*/

///3: Diamond Pattern
/*Write a program that prompts the user for a number and prints a diamond pattern using asterisks (*) and spaces. The number represents the number of rows in the diamond (which should be odd). Use nested loops and conditional statements to achieve this pattern.//
let userNumber = Number(prompt("enter your number: "));
if (userNumber > 1) {
  let noPrime = true;
  for (let i = 2; i < userNumber / 2; i++) {
    if (userNumber % i === 0) {
      noPrime = false;
      break;
    } else {
      for (let i = 1; i <= userNumber; i++) {
        let str = "*";
        let space = " ";
        console.log(space.repeat(userNumber - i) + str.repeat(i * 2 - 1));
      }
      for (let i = userNumber - 1; i >= 1; i--) {
        let str = "*";
        let space = " ";
        console.log(space.repeat(userNumber - i) + str.repeat(i * 2 - 1));
      }
    }
  }
} else {
  console.log("you digit is not a prime number!");
}*/

//4: Prime Number Generator
/*Write a program that prompts the user for a range of numbers and generates all prime numbers within that range. Use a loop and conditional statements to check if each number is prime and output the prime numbers.
function checkPrimeNumbers() {
  let userNumber1 = Number(
    prompt(
      "Enter the first number for a range of numbers and generate all prime numbers within that range: "
    )
  );
  let userNumber2 = Number(
    prompt(
      "Enter the last number for a range of numbers and generate all prime numbers within that range: "
    )
  );
  let primeNumbers = [];

  for (
    let currentNumber = userNumber1 + 1;
    currentNumber < userNumber2;
    currentNumber++
  ) {
    let noPrime = true;

    if (currentNumber < 1) {
      noPrime = false;
    } else {
      for (let i = 2; i < currentNumber / 2; i++) {
        if (currentNumber % i === 0) {
          noPrime = false;
          break;
        }
      }
    }

    if (noPrime === true) {
      primeNumbers.push(currentNumber);
    }
  }

  return primeNumbers;
}

console.log(checkPrimeNumbers());*/

/*5: Guessing Game
//Write a program that generates a random number between 1 and 100 and lets the user guess the number. Provide feedback to the user, indicating whether the guessed number is too high or too low. Use a loop and conditional statements to implement the game, allowing the user to keep guessing until they guess the correct number.//

function guessNumber() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let secretNumber = randomNumber(1, 3);
  let userNumber;
  do {
    userNumber = Number(
      prompt(
        "put your number here and let's try to gues what is hiden number: "
      )
    );
  } while (secretNumber != userNumber);
  return "congrats!you guessed secret number!";
}
console.log(guessNumber());*/
/*6) მარტივი რიცხვის შემოწმება:
function checkPrimeNumbers() {
  let userNumber = Number(prompt("put your number here: "));
  let notPrime = false;
  if (userNumber === 1) {
    return "is not prime";
  } else if (userNumber > 1) {
    for (let i = 2; i < userNumber / 2; i++) {
      if (userNumber % i === 0) {
        notPrime = true;
        break;
      }
    }
    if (notPrime === true) {
      return `${userNumber} is not a prime number`;
    } else {
      return `${userNumber} is a prime number`;
    }
  } else {
    return `${userNumber} is not a prime number`;
  }
}
console.log(checkPrimeNumbers());*/
