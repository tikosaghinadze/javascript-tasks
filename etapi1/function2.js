/*1)Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.//

let string = "w3resource.com";
let element = "o";
function letterCounter(str, letter) {
  let splitedString = str.split("");
  let quantityOfElement = 0;
  for (let i = 0; i < splitedString.length; i++) {
    if (splitedString[i] === letter) {
      quantityOfElement += 1;
    }
  }
  return quantityOfElement;
}
console.log(letterCounter(string, element));*/

/*2)    Write a JavaScript function to apply the Bubble Sort algorithm.//

let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function sortInDescendingOrder(arr) {
  let newArray = arr.sort((a, b) => b - a);

  return newArray;
}
console.log(sortInDescendingOrder(array));*/

/*3)   Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.//
let countrys = ["Australia", "Germany", "United States of America"];
function longestCountryName(elements) {
  let longestCountryName = elements[0];
  for (let i = 1; i < elements.length; i++) {
    if (longestCountryName.length < elements[i].length) {
      longestCountryName = elements[i];
    }
  }
  return longestCountryName;
}
console.log(longestCountryName(countrys));*/

/*4)    Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.//

let array = [1, 2, 3, 4, 5];
function theSecendLowest(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[1];
}
console.log(theSecendLowest(array));*/

/*the second bigest
let array = [1, 2, 3, 4, 5];
function theSecendLowest(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  return sortedArray.length - 1;
}
console.log(theSecendLowest(array));*/

/*5))    Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.//

let string = "the quick brown fox";
function letterConvertor(str) {
  let newString = str.split(" ");

  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
  }
  return newString.join(" ");
}
console.log(letterConvertor(string));*/

/*6)    Write a JavaScript function that returns a string that has letters in alphabetical order.//

let string = "webmaster";
function alphabeticalOrder(str) {
  let newString = str.split("");
  let alphabeticalOrder = newString.sort();
  return alphabeticalOrder.join("");
}
console.log(alphabeticalOrder(string));*/

/*7)   Write a JavaScript function that generates all combinations of a string.
let string = "dog";
function generatesAllCombinations(str) {
  let generatesAllCombinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let e = i + 1; e <= str.length; e++) {
      generatesAllCombinations.push(str.slice(i, e));
    }
  }
  return generatesAllCombinations;
}
console.log(generatesAllCombinations(string));*/

/*8)   Write a JavaScript function to find the first not repeated character.//

let string = "abacddbec";
function uniqueElement(str) {
  let newString = str.split("");
  return newString.find(
    (element) => newString.indexOf(element) === newString.lastIndexOf(element)
  );
}
console.log(uniqueElement(string));*/
