const prompt = require(`prompt-sync`)();

/*1)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.//
let array=[1, 6, 123, 53, 27];
function sumDigits(numbers) {
  let sumDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumDigits += numbers[i];
  }
  console.log(sumDigits);
}
sumDigits(array); */

/*2)დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.//
let array=[1, 2, 3, 4];
function averageDigits(numbers) {
  let averageDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
    averageDigits = averageDigits + numbers[i];
  }
  averageDigits = averageDigits / 2;
  console.log(averageDigits);
}
averageDigits(array);*/

/*3)დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.//
function increasingNumbers(numbers) {
  let len = numbers.length;
  for (let i = 0; i < len; i++) {
    //დავუშვათ პირველი ელემენტი ყველაზე პატარაა//
    let minIndex = i;
    //ამით ვპოულობთ ყველაზე პატარა რიცხვის ინდექს მასივში//
    for (let j = i + 1; j < len; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    //ვცვლიტ ნაპოვნ ყველაზე პატარა ელემენტს პირველ ელემენტში//

    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
  return numbers;
}
let numbers = [1, 8, 3, 2, 7, 5, 10, 6, 9, 4];
let sortedNumbers = increasingNumbers(numbers);
console.log("Sorted array: " + sortedNumbers);*/
/*იმედია ასე საშინლად აღარასდროს დავწერ ამოცანას,ვწერ მეორე ვარიანტს,იმის შემდეგ რაც გავიგე,რომ sort() მეთოდი არსებობს:დ//
let array=[1, 8, 3, 2, 7, 5, 10, 6, 9, 4];
function increasingNumbers(numbers) {
  let increasingNumbers = numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(increasingNumbers);
}
increasingNumbers(array);*/
/*4)დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.//
let array=[50, 90, 60, 100];
function theBigestElement(elements) {
  let sortElements = elements.sort(function (a, b) {
    return b - a;
  });
  let theBigestElement = sortElements[0];
  console.log(theBigestElement);
}
theBigestElement(array);*/
/*5)დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.//
let arr=[1, -45, 90, 2, 456, 30];
function theSmallestElement(array) {
  let newArray = array.sort(function (a, b) {
    return a - b;
  });
  let theSmallestElement = newArray[0];
  console.log(theSmallestElement);
}
theSmallestElement(arr);*/
/*6)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.//
let array = [8, "Tiko", "sunny day", 1999, ["work", "money", "relax"]];
function checkElement(arr, elements) {
  let updatedArray = arr.flat(Infinity);
  return updatedArray.includes(elements);
}
let userElement = prompt("enter your element here:");
if (!isNaN(userElement)) {
  userElement = Number(userElement);
}

console.log(checkElement(array, userElement));*/

/*7)დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.//
let myArray = ["Tiko", "Teo", "Mariami", "Ekaterine", "Sofia"];
let removedElement = myArray.splice(3, 1);
console.log("მასივიდან ამოღებული ელემენტია: " + removedElement);
//ეს splice() ელემენტი,თურმე ჩამატების ფუნქციაც აქვს დავწერ ამის მაგალითსაც//
//თუკი splice(3.,1)-1-ის ნაცვლად დავწერდი 0-ს მაში არ წამიშლიდა ელემენტს და პირდაპირ მე-3 ინდექსით გათვალისწინებული ელემენტის შემდეგ ჩაამატებდა ახალ ელემენტს//
let myArray = ["Tiko", "Teo", "Mariami", "Ekaterine", "Sofia"];
let updated = myArray.splice(3, 1, "Tamaza");
console.log(myArray);
console.log(updated);*/
/*8)დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.//
let array = [
  "React",
  "React",
  "jQuery",
  "React",
  "Angular",
  "React",
  "Lodash",
  "React",
];
let userElement="prompt("enter your element here to undestand quantity in your array:""
function countElement(element) {
  let quantityOfElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      quantityOfElement += 1;
    }
  }
  console.log(quantityOfElement);
}
countElement(userElement)
);*/
/*9)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.//
let digitsArray = [12, 1, 6, 9, 14, 3, 7, 16, 22, 0, 23, 21, 24];
function sumOfEvenNumbers(digits) {
  let sumdigits = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] % 2 === 0) {
      sumdigits += digits[i];
    }
  }
  console.log(sumdigits);
}
sumOfEvenNumbers(digitsArray);*/

/*10)დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.//
let numbersArray = [80, 45, 132, 89, 35, 67, 139];
function theSecondBigDigit(number) {
  let sortedArray = numbersArray.sort(function (a, b) {
    return b - a;
  });
  let theSecondBigDigit = sortedArray[1];
  console.log(theSecondBigDigit);
}
theSecondBigDigit(numbersArray);*/
//11)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.//
/*ქვემოთ რა კოდიც დავწერე მინდოდა ემუშავა,მაგრამ როგორც ვხვდები,რადგან რამდენიმე განზომილებიანი მასივი მაქვს,მაგიტომ არ მუშაობს
მინდოდა ამ კოდით შემედარებია არა მხოლოდ ის რომ მასივები ტოლია,არამედ ზუსტად იმალე ადგილას უ იყო განლაგებული ელემენტები,მაგრამ არ გამოვიდა.
სავარაუდოთ,ერთ განზომილებიან მასივზე იმუშავებდა.*/
/*let array1 = [
  8,
  "Tiko",
  [57, "morning", [45, [1884, "hi", "okay"]]],
  "sunny day",
  1999,
  ["work", "money", "relax"],
];
let array2 = [
  8,
  "Tiko",
  [57, "morning", [45, [1884, "hi", "okay"]]],
  "sunny day",
  1999,
  ["work", "money", "relax"],
];
function ArrayEqualityCheck(arr1, arr2) {
  let resulte = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        continue;
      } else {
        resulte = false;
      }
    }
    if (resulte == true) {
      console.log("arrays are simillar!");
    } else {
      console.log("arrys aren't simillar");
    }
  }
}
ArrayEqualityCheck(array1, array2);*/
/*ახლა დავწერ იგივე ამოცანის კოდს,ოღონდ includes() გამოყენებით//
let array1 = [80, 45, 132, 89, 35, 67, 139];
let array2 = [80, 45, 132, 89, 35, 67, 139];
function equalArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.includes(arr2[i])) {
        continue;
      }
      return true;
    }
  } else {
    return false;
  }
}

console.log(equalArrays(array1, array2));*/

/*12)დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შეერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.//
let array1 = [23, 1, 5, 7, 24, 12, 8, 7, 24];
let array2 = [60, 12, 9, 10, 267, 34, 56];
function oneArray(arr1, arr2) {
  arr1.push(arr2);
  let wholeArray = arr1.flat(1);
  let oneArrays = wholeArray.sort(function (a, b) {
    return a - b;
  });
  console.log(oneArrays);
}
oneArray(array1, array2);*/

/*13)დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.//
let surNames = [
  "Saghinadze",
  "Lortkipanidze",
  "Abulashvili",
  "Tsutskiridze",
  "Mnatobishvili",
  "Buadze",
];

function sortedAlphabet(arr) {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
console.log(sortedAlphabet(surNames));*/
/*ამ წინა ამოცანის ასე მარტივად გაკეტებაც შეიძლებბოდა,რადგან sort() მეთოდი თვითონვე ალაგებს სტრინგებს ალფავიტის მიხედვით//
let surNames = [
  "Saghinadze",
  "Lortkipanidze",
  "Abulashvili",
  "Tsutskiridze",
  "Mnatobishvili",
  "Buadze",
];

function sortedAlphabet(arr) {
  return arr.sort();
}
console.log(sortedAlphabet(surNames));*/
/*14)დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.//
let array1 = ["swavlis", "mogzauroba", "dziri", 99, "me", 2018, "Tiko"];
let array2 = ["swavlis", "arvici", 99, "me", 1999, 2018, "Tiko"];
let array3 = ["swavlis", 23, 50, "dziri", 99, "me", 1999, 2018, "Tiko"];
let array4 = [
  "swavlis",
  5,
  6,
  "aghmasvla",
  99,
  "me",
  1999,
  2018,
  "Tiko",
  "changes",
];
let element = prompt("enter your element here:");
function commonElement(arr1, arr2, arr3, arr4) {
  if (
    arr1.includes(element) &&
    arr2.includes(element) &&
    arr3.includes(element) &&
    arr4.includes(element)
  ) {
    console.log(
      "your element is " + element + " and it's included in all array!"
    );
  } else {
    console.log(
      "your element is " + element + " and it's not included in all array!"
    );
  }
}
commonElement(array1, array2, array3, array4);*/

/*15)შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე//
let car = {
  mark: "Rubicon",
  model: "Jeep Wrangler",
  color: "gray",
  year: 2024,
};
console.log(car);*/
/*16)დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.//
let car = {
  mark: "Rubicon",
  model: "Jeep Wrangler",
  color: "gray",
  year: 2024,
  start: function () {
    console.log("The car is starting!");
  },
};
console.log(car.start());//აქ ბეჭდავს ჩვეულებრივ "The car is starting!",მაგრამ თან ბეჭდავს undefind-s da ratom?*/

/*17)შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.//
let person = {
  name: "Tiko",
  age: 23,
  city: "Tbilisi",
};
console.log(person.name);*/

/*18)დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.//
let person = {
  name: "Tiko",
  age: 23,
  city: "Tbilisi",
};
person.job = "secret";
console.log(person);*/
