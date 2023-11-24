const prompt = require(`prompt-sync`)();
/*1)Exercise 1: Anagram Checker
Write a function that takes two strings as input and determines whether they are anagrams of each other. 
Anagrams are words or phrases that use the same characters in a different order.*/
/*let string1 = "race";
let string2 = "care";
function anagramCheck(str1, str2) {
  let anagram = true;
  if (str1.length === str2.length) {
    let splitedstr1 = str1.split("");
    for (let i = 0; i < splitedstr1.length; i++) {
      if (!str2.includes(splitedstr1[i])) {
        anagram = false;
        break;
      }
    }
  } else {
    return "your strings aren't anagrama";
  }
  return anagram;
}
console.log(anagramCheck(string1, string2));*/

/*2)Exercise 2: Prime Number Generator
Write a function that takes a range of numbers as input and returns an array 
containing all prime numbers within that range.*/
/*let userNumber1 = Number(prompt("input your first number: "));
let userNumber2 = Number(prompt("input your last number: "));
function primeNumbersGenerator(num1, num2) {
  let primeNumbers = [];
  for (let i = num1 + 1; i < num2; i++) {
    let isPrime = true;
    if (i >= 1) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primeNumbers.push(i);
      }
    }
  }
  return primeNumbers;
}
console.log(primeNumbersGenerator(userNumber1, userNumber2));*/

/*3)Exercise 3: Sorting Algorithms
Implement sorting algorithms such as Bubble Sort, Insertion Sort, or Quick Sort. 
Write functions that take an array of numbers as input and sort the array in ascending order using the chosen algorithm.*/
/*let array = [3, 7, 2, 5, 1, 4, 6, 8];
function sortingArray(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

console.log(sortingArray(array));*/

/*4)Exercise 4: Binary Search
Write a function that takes a sorted array of numbers and a target number as input 
and performs a binary search to determine if the target number exists in the array. 
Return true if found, and false otherwise.*/

/*5)Exercise 5: Unique Elements
Write a function that takes an array of numbers as input and returns a new array 
containing only the unique elements of the original array. Remove any duplicate numbers.*/
/*let array = [2, 4, 3, 11, 12, 25, 7, 1, 3, 2, 1, 2, 10];
function uniqueElements(arr) {
  let uniqueElements = new Set(arr);
  return Array.from(uniqueElements);
}
console.log(uniqueElements(array));*/
/*იმ შემთხვევაში თუ მოგვინდებოდა განმეორებადი ელემენტების დაბრუნება,new Set() მეთოდით ვიზამდით ასე:
let array = [2, 4, 3, 11, 12, 25, 7, 1, 3, 2, 1, 2, 10];
function duplicateElements(arr) {
  let uniqueElements = new Set();
  let duplicateElements = new Set();
  arr.forEach((element) => {
    if (uniqueElements.has(element)) {
      duplicateElements.add(element);
    } else {
      uniqueElements.add(element);
    }
  });
  return Array.from(duplicateElements);
}
console.log(duplicateElements(array));*/

/*6)Exercise 6: Palindrome Checker
Write a function that takes a string as input and determines whether it is a palindrome. 
Consider letters and digits only, ignoring spaces, punctuation, and letter casing.*/
/*let string = "22";
function removeSymbols(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}
function palindromeCheck(str) {
  let palindrome = true;
  let replacedString = removeSymbols(str);
  let reversedString = replacedString.split("").reverse().join("");
  if (replacedString != reversedString) {
    palindrome = false;
  }
  return palindrome;
}
console.log(palindromeCheck(string));*/

/*7)Exercise 7: Largest Sum Subarray
Write a function that takes an array of numbers as input and finds the contiguous subarray with the largest sum.
 Return the sum of that subarray.*/
/*let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function largestSubArray(arr) {
  let largestSum = -Infinity;
  let interval = [];
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > largestSum) {
        largestSum = sum;
        interval = arr.slice(i, j + 1);
      }
    }
  }
  return { largestSum, interval };
}
console.log(largestSubArray(array));*/

/*8)Exercise 8: Missing Number
Write a function that takes an array of numbers from 1 to n, 
with one number missing, and returns the missing number.*/
/*let array = [1, 2, 4, 5, 6, 10];
function missingNumber(arr) {
  arr.sort((a, b) => a - b);
  let missingNumbers = [];
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] + 1 != arr[i + 1]) {
      for (j = arr[i] + 1; j < arr[i + 1]; j++) {
        missingNumbers.push(j);
      }
    }
  return missingNumbers;
}
console.log(missingNumber(array));*/

/*9)Exercise 9: Deep Clone
Write a function that performs a deep clone of an object. 
The function should create a new object with the same structure and values as the original, 
without any reference to the original object.*/
/*let person = {
  name: "Tiko",
  surname: "Saghinadze",
  age: "23",
  skill: "Ninja of coding!",
};
function deepClone(obj) {
  return { ...obj };
}
console.log(deepClone(person));*/
/*10)Exercise 10: Longest Common Prefix
Write a function that takes an array of strings as input and finds the longest common prefix among the strings.
 Return an empty string if there is no common prefix.*/
/*let wordsArray = [
  "anti-aircraft",
  "counter-intelligence",
  "non-negotiable",
  "counter-intelligence",
  "pre-existing",
  "self-aware",
  "underestimate",
  "anti-aircraft",
];
function longestCommonPrefix(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("-");
  }
  let prefix = [];
  let pre;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      pre = arr[i][0];
      prefix.push(pre);
    }
  }

  let notCommon = new Set();
  let common = new Set();
  prefix.forEach((element) => {
    if (notCommon.has(element)) {
      common.add(element);
    } else {
      notCommon.add(element);
    }
  });
  let commonElements = Array.from(common);
  return commonElements.reduce((longestCommon, curent) => {
    return curent.length > longestCommon.length ? curent : longestCommon;
  }, "");
}
console.log(longestCommonPrefix(wordsArray));*/
//prime numbers generator:
/*let array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function generatorPrimeNumber(arr){
let primeNumbers=[]
for(let i=0;i<arr.length;i++){
if(i>1){
let prime=true
for(let j=2;j<=Math.sqrt(i);j++){
if(i%j===0){
prime=false
break
}
}
if(prime){
primeNumbers.push(i)
}
}
}
return primeNumbers;
}
console.log(generatorPrimeNumber(array))*/
