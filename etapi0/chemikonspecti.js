//1)რენდომ რიცხვი
/*დავალების აღწერა: დაწერეთ ფუნქცია GenerRandomNumber, რომელიც არგუმენტად იღებს მინიმალურ და 
მაქსიმალურ რიცხვს და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
მთავარი ლოგიკა: გამოიყენეთ Math.random() ფუნქცია შემთხვევითი ათწილადს გვიბრუნდებს 0-დან 1-მდე,
 შემდეგ გადაიტანთ Math.floor-ის საშუალებით ამ რიცხვს ვაქცევთ ნატურალურ რიცხვად.*/
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*2)ამოცანის აღწერა: დაწერეთ ფუნქცია kapitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად
 და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
მთავარი ლოგიკა: დაყავით წინადადება სიტყვებად, ჩაწერეთ თითოეული სიტყვის პირველი ასო დიდ ასოდ და 
შეუერთე ის სტყვის დარჩენილ ასოებს და შემდეგ კვლად შეაწებე წინადადება.*/
/*Split the Sentence: sentence.split(" ") ყოფს შეყვანილ წინადადებას სიტყვების მასივში.
 split(" ")-ზე გადაცემული არგუმენტი განსაზღვრავს, რომ სიტყვები დაიხლიჩოს სფეისებზე.

    მაგალითი: "hello world javascript" დაიხლიჩება ასე ["hello", "world", "javascript"].

    Map Over the Words: .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) გამოყენებული map()
     მეთოდი ახდენს იტერაციას დახლეჩილი მასივის თითოეულ წევრზე . თითოეული სიტყვისთვის ის აკეთებს შემდეგს:
        word.charAt(0) იღებს სიტყვის პირველ სიმბოლოს.რახან არ ვიყენებთ for loops ამტომ ხომ გვინდოდა
        მივწდომოდით ყოველ ჯერზე ახალი სიტყვის პირველ ასოს ხოდა ეს გავაკეთეთ charAt() მეთოდით.
        .toUpperCase() გარდაქმნის პირველ სიმბოლოს დიდ ასოებად.
        word.slice(1) იღებს სიტყვის დანარჩენ სიმბოლოებს (ინდექსი 1-დან ბოლომდე).
        word.charAt(0).toUpperCase() + word.slice(1) წერს სიტყვის პირველ ასოს.
 მაგალითი: ["hello", "world", "javascript"] ხდება ["Hello", "World", "Javascript"].
შეუერთეთ სიტყვები: .join(" ") აერთიანებს შეცვლილ სიტყვებს ისევ წინადადებაში, ინტერვალის გამოყენებით, 
რაც სპლიტში გამოვიყენეთ.
მაგალითი: ["Hello", "World", "Javascript"] ხდება "Hello World Javascript".
 map() მეთოდი JavaScript-ში არის უფრო მაღალი რიგის ფუნქცია, რომელიც გამოიყენება მასივის 
 ელემენტების გარდაქმნისთვის. ის საშუალებას გაძლევთ გამოიყენოთ ფუნქცია მასივის თითოეულ ელემენტზე და
  შექმნათ ახალი მასივი, რომელიც შეიცავს ამ ფუნქციის გამოყენების შედეგებს. აი, როგორ მუშაობს:


გამეორება: map() მეთოდი მეორდება მასივის თითოეულ ელემენტზე სათითაოდ.
ფუნქციის აპლიკაცია: თითოეული ელემენტისთვის შესრულებულია მოწოდებული გამოძახების ფუნქცია.
 ამ ფუნქციას შეუძლია მიიღოს სამი პარამეტრი: მიმდინარე ელემენტი, მიმდინარე ელემენტის ინდექსი და თავად მასივი.
შედეგების შეგროვება: თითოეული ელემენტისთვის გამოძახების ფუნქციის დაბრუნების მნიშვნელობა გროვდება ახალ მასივში.
ახალი მასივი: ბოლოს, map() აბრუნებს ახალ მასივს, რომელიც შეიცავს გარდაქმნილ ელემენტებს.
*/
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
//For loop-ით დავწერდით ასე
let sentence = "Tiko are going to lisen music!";
function capitalizWords(string) {
  let newSentence = string.split(" ");
  for (let i = 0; i < newSentence.length; i++) {
    newSentence[i] = newSentence[i][0].toUpperCase() + newSentence[i].slice(1);
  }
  return newSentence.join(" ");
}
console.log(capitalizWords(sentence));*/
/*3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს
 ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
 Set არის ჩაშენებული მონაცემთა სტრუქტურა, რომელიც საშუალებას გაძლევთ შეინახოთ
  ნებისმიერი ტიპის უნიკალური მნიშვნელობები, იქნება ეს პრიმიტიული მნიშვნელობები თუ ობიექტი. 
  მასივისაგან განსხვავებით, set არ იძლევიან მნიშვნელობების დუბლირებას. 
  ეს ნიშნავს, რომ ნაკრების ყველა მნიშვნელობა უნიკალური უნდა იყოს*/

 let objectsArray = [
  { name: "Tiko", age: 23, job: "barista" },
  { name: "Mari", age: 30, job: "dancer" },
  { name: "Tedo", age: 23, job: "programmer" },
  { name: "Alex", age: 25, job: "barista" },
  { name: "Tiko", age: 22, job: "barista" },
];
function extractUniquePropertyValues(objects, propertyName) {
    return [...new Set(objects.map(obj => obj[propertyName]))];
}
console.log(extractUniquePropertyValues(objectsArray, "job"))
/*4)შეამოწმეთ Pangram
დავალების აღწერა: დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს true, თუ ის არის 
პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც),თუ არადა false.
მთავარი ლოგიკა: გადააკეთეთ შეყვანილი სტრიქონი პატარა ასოებად, შემდეგ შეამოწმეთ შეიცავს თუ არა ის ანბანის 
ყველა ასოს რეგულარული გამოხატვის გამოყენებით.
ანბანი: ეს ცვლადი შეიცავს ანბანის ყველა ასოს მცირე ასოებით, წარმოდგენილი სტრიქონის სახით:
 'abcdefghijklmnopqrstuvwxyz'.
[...ანბანი]: გავრცელების ოპერატორი(სპრეიდ) ([...]) გამოიყენება ანბანის ასოების სტრიქონის ცალკეული 
სიმბოლოების მასივში გადასაყვანად. ეს ნაბიჯი არ არის საჭირო მოცემული პრობლემისთვის და შეიძლება 
გამარტივდეს.
.every(letter => sentenceLowerCase.includes(letter)): .every() მეთოდი გამოიყენება იმის შესამოწმებლად, 
შედის თუ არა ანბანის ყველა ასო წინადადებაშიLowerCase. არგუმენტად იღებს გამოძახების ფუნქციას,
 რომელიც ამოწმებს არის თუ არა თითოეული ასო წინადადებაში LowerCase.
*/
function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sentenceLowerCase = sentence.toLowerCase();
  return [...alphabet].every(letter => sentenceLowerCase.includes(letter));
}
//მეორე ნაირად:
function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sentenceLowerCase = sentence.toLowerCase();
  
  // Check if every letter of the alphabet is present in the sentence
  for (let letter of alphabet) {
      if (!sentenceLowerCase.includes(letter)) {
          // If any letter is missing, it's not a pangram
          return false;
      }
  }
  
  // If all letters are present, it's a pangram
  return true;
}

// Examples
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true (pangram)
console.log(isPangram("Hello, World!")); // Output: false (not a pangram)
/*5)ამოიღეთ უნიკალური სიტყვები (საერთო ინგლისური სიტყვების გამოკლებით)
დავალების აღწერა: დაწერეთ ფუნქცია, რომელიც იღებს წინადადებასდა აბრუნებს უნიკალური სიტყვების
 მასივს ანბანური თანმიმდევრობით, გამოკლებით საერთო ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
მთავარი ლოგიკა: დაყავით წინადადება სიტყვებად, გაფილტრეთ ჩვეულებრივი სიტყვები, გადაიყვანეთ პატარა 
ასოებზე, შექმენით ნაკრები უნიკალური მნიშვნელობების მისაღებად და შემდეგ დააბრუნეთ იგი მასივში და
 დაალაგეთ.*/
 function extractUniqueWords(sentence) {
  const commonWords = new Set(['the', 'a', 'is']); // Add more common words if needed
  const words = sentence.toLowerCase().split(' ').filter(word => !commonWords.has(word));
  return [...new Set(words)].sort().join(" ");
}
/*6)წაშალეთ ცრუ მნიშვნელობები მასივიდან
დავალების აღწერა: დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
მთავარი ლოგიკა: გამოიყენეთ filter() მეთოდი ყალბი მნიშვნელობების მოსაშორებლად 
(როგორიცაა false, null, undefined, 0, NaN ან "").*/
function removeFalseValues(array) {
  return array.filter(value => Boolean(value));
}
/*7)დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაცვლელად.
მთავარი ლოგიკა: დაყავით წინადადება სიტყვებად, შეცვალეთ მასივი და შეუერთეთ სიტყვები ისევ წინადადებაში.*/
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
//8)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
//9)დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი
function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
          largestNumber = numbers[i];
      }
  }
  return largestNumber;
}
//10)10)დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce)//
let array = [12, 23, 45, 63, 22, 34];
function sumDigits(arr) {
  let sumDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    sumDigits += arr[i];
  }
  return sumDigits;
}
console.log(sumDigits(array));*/
//reduce მეთოდით.
let array = [12, 23, 45, 63, 22, 34];
function sumDigits(arr) {
  let newArray = array.reduce((a, b) => a + b);
  return newArray;
}
console.log(sumDigits(array));*/


