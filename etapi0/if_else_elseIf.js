//1)Write a script that checks whether a year entered by a user is a leap year or not.//
let checkYear = Number(prompt("put whitch one year want to check:"));
if (checkYear % 4 == 0 && checkYear % 400 == 0 && checkYear % 100 == 0) {
  console.log("your entered year is a leap!");
} else if (checkYear % 400 == 0) {
  console.log("your entered year is a leap!");
} else if (checkYear % 4 == 0) {
  console.log("your entered year is a leap!");
} else {
  console.log("your entered number is not leap");
}

//2)Create a program that compares two numbers and displays the larger number.//
let num1 = Number(prompt("sheiyvane sheni pirveli ricxvi:"));
let num2 = Number(prompt("sheiyvane sheni meore ricxvi"));
if (num1 > num2) {
  console.log(
    "შენი მითითებული რიცხვები არის " +
      num1 +
      " და " +
      num2 +
      " ამ ორი რიცხვიდან " +
      num1 +
      " მეტია " +
      num2 +
      "-ზე"
  );
} else {
  console.log(
    "შენი მითითებული რიცხვები არის " +
      num1 +
      " და " +
      num2 +
      " ამ ორი რიცხვიდან " +
      num2 +
      " მეტია " +
      num1 +
      "-ზე"
  );
}

//3)Write a program that determines if a student's grade is an A, B, C, D, or F based on their score.//
let resulte = Number(prompt("შეიყვანეთ თქვენი საბოლოო შეფასება:"));
if (resulte > 95) {
  console.log("გილოცავ შენ წარმატებით დახურე კურსი");
} else if (resulte > 80 && resulte < 95) {
  console.log("შენ კურსი დახურე B-ზე,წარმატებები");
} else if (resulte > 70 && resulte < 80) {
  console.log("შენ კურსი დახურე C-ზე,წარმატებები");
} else if (resulte > 60 && resulte < 70) {
  console.log("შენ კურსი დახურე D-ზე,წარმატებები");
} else if (resulte > 50 && resulte < 60) {
  console.log("შენ კურსი დახურე F-ᲖᲔ ᲬᲐრმატებები");
} else if (resute < 50) {
  console.log("ᲡᲐᲛᲬᲣᲮᲐᲠᲝᲓ,თქვენ ვერ დახურეთ კურსი,გისურვებთ წარმატებას !");
} else {
  console.log(
    "თქვენი შეყვანილი მონაცემი დაუშვებელია.შეგახსენებთ,რომ  შესაფასებლად განსაზღვრული ნიშანია 1-დან 100-მდე."
  );
}

//4)Create a script that checks whether a number is divisible by both 3 and 5.//
let checkNumber = Number(prompt("შეიყვანე რიცხვი:"));
if (checkNumber % 3 == 0 && checkNumber % 5 == 0) {
  console.log(checkNumber + " იყოფა 3-ზეც და 5-ზეც");
} else if (checkNumber % 3 == 0 && checkNumber % 5 !== 0) {
  console.log(checkNumber + " იყოფა 3-ზე,მაგრამ არ იყოფა 5-ზე");
} else if (checkNumber % 5 == 0 && checkNumber % 3 !== 0) {
  console.log(checkNumber + " იყოფა 5-ზე,მაგრამ არ იყოფა 3-ზე");
} else {
  console.log(
    "შენი მითითებული რიცხვი არის " +
      checkNumber +
      "და ის არ იყოფა არც 3-ზე და არც 5-ზე"
  );
}
//5)Write a program that finds the largest of three numbers.//
function theLargestFromTree() {
  let num1 = Number(prompt("შეიყვანე შენი პირველი რიცხვი აქ:"));
  let num2 = Number(prompt("შეიყვანე შენი მეორე რიცხვი აქ:"));
  let num3 = Number(prompt("შეიყვანე შენი მესამე რიცხვი აქ:"));
  if (num1 > num2 && num1 > num3) {
    console.log(
      num1 + " არის " + num2 + " -ზე და " + num3 + " -ზე დიდი რიცხვი"
    );
  } else if (num2 > num1 && num2 > num3) {
    console.log(
      num2 + " არის " + num1 + " -ზე და " + num3 + " -ზე დიდი რიცხვი"
    );
  } else if (num3 > num2 && num3 > num1) {
    console.log(
      num3 + " არის " + num2 + " -ზე და " + num1 + " -ზე დიდი რიცხვი"
    );
  }
}
theLargestFromTree();

//6)Create a program that checks if a user inputted string is a palindrome.//

//7)Write a script that determines if a given year is a century year (ending with 00) or not.//
let checkYear = Number(
  prompt(
    "თუ გინდა შეამოწმე შენს მიერ შეყვანილი წელი იკითხება თუ არა როგორც საუკუნე,მაშინ შეიყვანე წელი აქ:"
  )
);
if (checkYear % 100 == 0) {
  console.log(
    "ᲨᲔᲜᲡ ᲛᲘᲔᲠ ᲨᲔᲧᲕᲐᲜᲘᲚᲘ ᲬᲔᲚᲘ ᲐᲠᲘᲡ " +
      checkYear +
      " და ეს წელიი შეგიძლია წაიკითხო,როგორც საუკუნე"
  );
} else {
  console.log(
    "ᲨᲔᲜᲡ ᲛᲘᲔᲠ ᲨᲔᲧᲕᲐᲜᲘᲚᲘ ᲬᲔᲚᲘ ᲐᲠᲘᲡ " +
      checkYear +
      " და ეს წელიი არ შეგიძლია წაიკითხო,როგორც საუკუნე"
  );
}
/*8)Create a program that calculates and displays the discount amount based on the purchase amount://
10% discount if purchase amount is between $100 and $500
    20% discount if purchase amount is between $501 and $1000
    30% discount if purchase amount is above $1000*/
let discount = Number(
  prompt(
    "შეიყვანე შენი დღევანდელი დანახარჯი აქ და გაიგებ რამდენ %-იანი ფასდაკლება გეკუთვნის"
  )
);
let discount1 = discount - discount * 0.1;
let discount2 = discount - discount * 0.2;
let discount3 = discount - discount * 0.3;
if (discount >= 100 && discount <= 500) {
  console.log(
    "შენი დღევანდელი დანახარჯი არის " +
      discount +
      "$ და გილოცავ მას დააკლდება 10% და თქვენ სულ გადაიხდით " +
      discount1 +
      "$"
  );
} else if (discount >= 501 && discount <= 1000) {
  console.log(
    "შენი დღევანდელი დანახარჯი არის " +
      discount +
      "$ და გილოცავ მას დააკლდება 20% და თქვენ სულ გადაიხდით " +
      discount2 +
      "$"
  );
} else if (discount > 1000) {
  console.log(
    "შენი დღევანდელი დანახარჯი არის " +
      discount +
      "$ და გილოცავ მას დააკლდება 30% და თქვენ სულ გადაიხდით " +
      discount3 +
      "$"
  );
} else if (discount < 100) {
  console.log("გილოცავ შენაძენს,შენ ვერ ისარგებლებ ფასდაკლებით!");
}

/*9)write a script that determines the season (spring, summer, fall, winter) based on the month entered by the user.*/
let monthCheck = prompt(
  "თუ გინდა გაიგო კონკრეტული თვე რომელ სეზონს ეკუთვნის,მაშინ შეიყვანე თვე:"
);
if (monthCheck == "მარტი" || monthCheck == "აპრილი" || monthCheck == "მაისი") {
  console.log(
    "შენი შეყვანილი თვე არის-" +
      monthCheck +
      " და ის ეკუთვნის გაზაფხულის სეზონს"
  );
} else if (
  monthCheck == "ივნისი" ||
  monthCheck == "ივლისი" ||
  monthCheck == "აგვისტო"
) {
  console.log(
    "შენი შეყვანილი თვე არის-" + monthCheck + " და ის ეკუთვნის ზაფხულის სეზონს"
  );
} else if (
  monthCheck == "სექტემბერი" ||
  monthCheck == "ოქტომბერი" ||
  monthCheck == "ნოემბერი"
) {
  console.log(
    "შენი შეყვანილი თვე არის-" +
      monthCheck +
      " და ის ეკუთვნის შემოდგომის სეზონს"
  );
} else if (
  monthCheck == "იანვარი" ||
  monthCheck == "თებერვალი" ||
  monthCheck == "დეკემბერი"
) {
  console.log(
    "შენი შეყვანილი თვე არის-" + monthCheck + " და ის ეკუთვნის ზამთვრის სეზონს"
  );
}

//10)Create a program that checks if a user inputted number is prime.//
let checkNumber = Number(
  prompt("თუ გინდა შეამოწმო რიცხვი მარტივი რიცხვია თუ არა,მაშინ შეიყვანე აქ:")
);
if (checkNumber % 2 == 0) {
  console.log(
    "შენს მიერ შეყვანილი რიცხვი არის " +
      checkNumber +
      " და ის არ არის მარტივირ რიცხვი,რადგან ის 1-ის და საკუთარი თავისა გარდა იყოფა სხვა რიცხვზეც."
  );
} else if (checkNumber % 1 == 0 && checkNumber % checkNumber == 0) {
  console.log(
    "შენს მიერ შეყვანილი რიცვი არის " +
      checkNumber +
      " და ის არის მარტივი რიცხვი,რადგან იყოფა მხოლოდ 1-ზე და საკუთარ თავზე."
  );
}
//11)Write a script that calculates the BMI (Body Mass Index) based on user's weight and height and categorizes it as underweight, normal weight, overweight, or obese.//
let bmiWeight = Number(
  prompt(
    "თუ გინდა იცოდე შენი სხეულის მასის ინდექსის მიხედვით,როგორ კატეგორიზდება შენი წონა,მაშინ შეიყვანე აქ შენი წონა კილოგრამებში:"
  )
);
let bmiHeight = Number(
  prompt(
    "თუ გინდა იცოდე შენი სხეულის მასის ინდექსის მიხედვით,როგორ კატეგორიზდება შენი წონა,მაშინ შეიყვანე აქ შენი სიმაღლე მეტრებში:"
  )
);
let bmi = bmiWeight / bmiHeight ** 2;
/*    Underweight: BMI less than 18.5
    Normal weight: BMI between 18.5 and 24.9
    Overweight: BMI between 25 and 29.9
    Obese: BMI 30 or higher*/
if (bmi < 18.5) {
  console.log(
    "შენი სხეულის მასის ინდექსია " +
      bmi +
      " და ინდექსის მიხედვით,შენი წონა ნორმაზე დაბალია"
  );
} else if (bmi > 18.5 && bmi < 24.9) {
  console.log(
    "შენი სხეულის მასის ინდექსია " +
      bmi +
      " და ინდექსის მიხედვით,შენ გაქვს ნორმალური წონა"
  );
} else if (bmi > 25 && bmi < 29.9) {
  console.log(
    "შენი სხეულის მასის ინდექსია " +
      bmi +
      " და ინდექსის მიხედვით,შენი წონა ითვლება ჭარბ წონათ"
  );
} else if (bmi > 30) {
  console.log(
    "შენი სხეულის მასის ინდექსია " +
      bmi +
      " და შენი წონა კრიტიკული მაჩვენებელია,ის საზიანოა ჯანმრთელობისთვის."
  );
}

//14)Create a program that simulates a simple guessing game. Generate a random number between 1 and 100. Ask the user to guess the number. Provide hints such as "Too high" or "Too low" until the user guesses the correct number.//
let hidenNumber = 23;
let guessNumber = Number(
  prompt(
    "მე დავმალე რიცხვი,რომელიც არის 1-100 შორის,შენ უნდა გამოიცნო ჩემს მიერ დამალული რიცხვი.დავიწყოთ თამაში,შეიყვანე რიცხვი,მე კი მოგცემ პატარა მინიშნებებს!:"
  )
);
if (guessNumber == hidenNumber) {
  console.log("გილოცავ წარმატებულ თამაშს,შენ იპოვე ჩემს მიერ დამალული რიცხვი!");
} else if (guessNumber >= 20 && guessNumber <= 30) {
  console.log(
    "საინტერესოა,შენ უკვე ძალიან მიუახლოვდი დამალულ რიცხვს,გააგრძელე თამაში!"
  );
} else if (guessNumber >= 1 && guessNumber < 20) {
  console.log(
    "საინტერესო თამაშობ,შიეძლება არც ისე შორს იყო დამალული რიცხვიდან.გააგრძელე თამაში!"
  );
} else if (guessNumber >= 30 && guessNumber <= 50) {
  console.log(
    "ვფიქრობ კარგად გადავმალე,მაგრამ შენც კარგად ეძებ.გააგრძელე თამაში!"
  );
} else if (guessNumber >= 50 && guessNumber <= 70) {
  console.log("დაკვირვებით მოძებნე,ვფიქრობ შორს წახვედი.გააგრძელე თამაში!");
} else if (guessNumber >= 70 && guessNumber <= 100) {
  console.log("ასე თუ გააგრძელე საერთოდ ვერ იპოვი!");
}
//15)Write a program that determines if a given word is a palindrome (reads the same backward as forward) and handles both uppercase and lowercase letters.//
//ვერ გავიგე ამ ამოცანაში რა ხდება საერტოდ,ანუ რა უნდა:დდ//
//16)Create a program that checks if a given year is a perfect square. (Hint: Use the Math.sqrt() function to find the square root of the year.)//

//17)Write a script that generates a random number between 1 and 12, representing a month. Display the name of the month and the number of days in that month. Consider leap years for February (29 days).//
let month1 =
  "შენი მითითებული რიცხვი არის იანვრის თვე 2023 წელია და მასში არის 31 დღე";
let month2 =
  "შენი მითითებული რიცხვი არის თებერვლის თვე 2023 წელია და მასში არის 28 დღე";
let month3 =
  "შენი მითითებული რიცხვი არის მარტის თვე 2023 წელია და მასში არის 31 დღე";
let month4 =
  "შენი მითითებული რიცხვი არის აპრილის თვე 2023 წელია და მასში არის 30 დღე";
let month5 =
  "შენი მითითებული რიცხვი არის მაისის თვე 2023 წელია და მასში არის 31 დღე";
let month6 =
  "შენი მითითებული რიცხვი არის ივნისის თვე 2023 წელია და მასში არის 30 დღე";
let month7 =
  "შენი მითითებული რიცხვი არის ივლისის თვე 2023 წელია და მასში არის 31 დღე";
let month8 =
  "შენი მითითებული რიცხვი არის აგვისტოს თვე 2023 წელია და მასში არის 30 დღე";
let month9 =
  "შენი მითითებული რიცხვი არის სექტემბრის თვე 2023 წელია და მასში არის 31 დღე";
let month10 =
  "შენი მითითებული რიცხვი არის ოქტომბრის თვე 2023 წელია და მასში არის 30 დღე";
let month11 =
  "შენი მითითებული რიცხვი არის ნოემბრის თვე 2023 წელია და მასში არის 31 დღე";
let month12 =
  "შენი მითითებული რიცხვი არის დეკემბრის თვე 2023 წელია და მასში არის 30 დღე";

let monthNumber = Number(
  prompt(
    "წელიწადში სულ 12 თვეა,მიუთითე 1-და 12-მდე რიცხვი და გაიგებ რომელი თვე მერამდენეა და რამდენი დღეა მასში"
  )
);
if (monthNumber == 1) {
  console.log(month1);
} else if (monthNumber == 2) {
  console.log(month2);
} else if (monthNumber == 3) {
  console.log(month3);
} else if (monthNumber == 4) {
  console.log(month4);
} else if (monthNumber == 5) {
  console.log(month5);
} else if (monthNumber == 6) {
  console.log(month6);
} else if (monthNumber == 7) {
  console.log(month7);
} else if (monthNumber == 8) {
  console.log(month8);
} else if (monthNumber == 9) {
  console.log(month9);
} else if (monthNumber == 10) {
  console.log(month10);
} else if (monthNumber == 11) {
  console.log(month11);
} else if (monthNumber == 12) {
  console.log(month12);
} else {
  console.log(
    "შეგახსენებთ,რომ თქვენ უნდა შეიყვანოთ 1-დან 12-ის ჩათვლით რიცხვები მხოლოდ,რადგან წელიწადში სულ 12 თვეა"
  );
}
//18)Create a program that simulates a rock-paper-scissors game. Prompt the user for their choice, generate a random choice for the computer, and determine the winner based on the choices. Display the result to the user.//
let userChoice = prompt(
  "მზად ხარ მეთამაშო rock-paper-scissors თამაში?!მაშინ შეიყვანე შენი გადაწყვეტილება.არ დაგავიწყდეს,ამ თამასში ვიყენებთ მხოლოდ სამ მოქმედებას და ეს არის:rock,paper და scissors!"
);
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
let computerChoice = getComputerChoice();

if (
  (userChoice == "rock" && computerChoice == "scissors") ||
  (userChoice == "paper" && computerChoice == "rock") ||
  (userChoice == "scissors" && computerChoice == "paper")
) {
  console.log(
    "შენი გადაწყვეტილებაა " +
      userChoice +
      " ჩემი გადაწყვეტილებაა კი " +
      computerChoice +
      " გილოცავ შენ მომიგე!ვცადოთ კიდევ ერთხელ?"
  );
} else if (userChoice == computerChoice) {
  console.log(
    "შენი გადაწყვეტილებაა " +
      userChoice +
      " ჩემი გადაწყვეტილებაა კი " +
      computerChoice +
      " რაც ნიშნავს რომ ფრეა!ორივე ძლიერები აღმოვჩნდით.ვცადოთ კიდევ ერთხელ?"
  );
} else {
  console.log(
    "შენი გადაწყვეტილებაა " +
      userChoice +
      " ჩემი გადაწყვეტილებაა კი " +
      computerChoice +
      " რაც იმას ნიშნავს,რომ სამწუხაროდ შენ წააგე.ვცადოთ კიდევ ერთხელ?"
  );
}
