const prompt = require(`prompt-sync`)();
/*1)დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.//
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(generateRandomNumber(1, 10));*/
/*2)დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.//
let sentence = "Tiko are going to lisen music!";
function capitalizWords(string) {
  let newSentence = string.split(" ");
  for (let i = 0; i < newSentence.length; i++) {
    newSentence[i] = newSentence[i][0].toUpperCase() + newSentence[i].slice(1);
  }
  return newSentence.join(" ");
}
console.log(capitalizWords(sentence));*/
/*3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.//
let objectsArray = [
  { name: "Tiko", age: 23, job: "barista" },
  { name: "Mari", age: 30, job: "dancer" },
  { name: "Tedo", age: 23, job: "programmer" },
  { name: "Alex", age: 25, job: "barista" },
  { name: "Tiko", age: 22, job: "barista" },
];
function specialValue(arr, value) {
  let newArray = [];
  for (let key in arr) {
    newArray.push(arr[key][value]);
  }
  return [...new Set(newArray)];
}
console.log(specialValue(objectsArray, "job"));*/

/*4)დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.//
let pangram =
  "The quick brown fox jumps over a lazy dog and explores the vibrant cityscape with zestful joy.";
let noPangram =
  "The sun sets behind the mountains, casting a golden glow across the valley.";
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function checkPangram(pangramCheck) {
  let newSentence = pangramCheck.toLowerCase();
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
}
console.log(checkPangram(pangram));*/
/*index of-ით მინდოდა გაკეთება,მაგრამ არ გამომივიდა ბოლომდე,ამიტომ გავაკეთებ includes-ით//
let pangram = "The quick brown fox jumps over a lazy dog.";
let noPangram = "Hello, World!";
function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxy";
  let newSentence = sentence.toLowerCase();
  for (let letter of alphabet) {
    if (!newSentence.includes(letter)) {
      return false;
    }
  }
  return true;
}
console.log(isPangram(pangram));
console.log(isPangram(noPangram));*/
/*5)დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".//
let sentence =
  "Sam had a feeling that this new feeling was different from any feeling he had felt before.";
function uniqueWordsByAlphabet(str) {
  str = str.toLowerCase();
  let arrayWords = str.split(" ");
  let commonWords = ["the", "a", "is"];
  let uniqueWords = arrayWords.filter((word) => !commonWords.includes(word));
  let newUniqueWords = [...new Set(uniqueWords)];
  let sortedNewUniqueWords = newUniqueWords.sort();
  return sortedNewUniqueWords;
}
console.log(uniqueWordsByAlphabet(sentence));*/

/*6)დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.//
let array = [1, 0, true, false, "hello", "", null, undefined, NaN, "world"];
function removeFalseValue(arr) {
  let falseValues = [false, null, undefined, 0, NaN, ""];
  let trueValues = arr.filter((elements) => !falseValues.includes(elements));
  return trueValues;
}
console.log(removeFalseValue(array));*/
/*7)დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.//
let sentence = "The sun is shining.";
function reverseSentence(sent) {
  let newSentence = sent.split(" ");
  let reverceWords = newSentence.reverse();
  let reverseSentence = reverceWords.join(" ");
  return reverseSentence;
}
console.log(reverseSentence(sentence));*/

/*8)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.//
let string = "level";
function checkPalindrome(str) {
  let arrString = string.split("");
  let reversedStringC = [...arrString];
  let reversedString = reversedStringC.reverse();
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] !== reversedString[i]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome(string));*/

/*9)დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი)//
let array = [40, 123, 423, 7, 56, 90];
function theBigestDigit(arr) {
  let theBigest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (theBigest < arr[i]) {
      theBigest = arr[i];
    }
  }
  return theBigest;
}
console.log(theBigestDigit(array));*/

/*10)დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce)//
let array = [12, 23, 45, 63, 22, 34];
function sumDigits(arr) {
  let sumDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    sumDigits += arr[i];
  }
  return sumDigits;
}
console.log(sumDigits(array));*/
/* reduce მეთოდით.
let array = [12, 23, 45, 63, 22, 34];
function sumDigits(arr) {
  let newArray = array.reduce((a, b) => a + b);
  return newArray;
}
console.log(sumDigits(array));*/
