const prompt = require(`prompt-sync`)();

//1)დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.//
for (number = 0; number <= 10; number++) {
  console.log(number);
}

//2)დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.//
function grdzeliSityva(winadadeba) {
  let sityvebi = winadadeba.split(" ");
  let grdzeliSityva = sityvebi[0];
  for (let i = 1; i < sityvebi.length; i++) {
    if (sityvebi[i].length > grdzeliSityva.length) {
      grdzeliSityva = sityvebi[i];
    }
  }.]\
  return grdzeliSityva;
}
console.log(grdzeliSityva("dghes avxsniT for loopis gamoyenebas!"));
//3)დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.//
for (let number = 2; number < 20; number += 2) {
  console.log(number);
}
//4)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს  შეყვანილი რიცხვი.//
let sayHello = Number(
  prompt("რამდენჯერ უნდა მოგესალმო,რომ მიხვდე გამიხარდა შენი ნახვა?")
);
for (let hello = 0; hello < sayHello; hello++) {
  console.log("Hello");
}
//5)დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.//
let sum = 0;
for (let number = 1; number < 100; number += 1) {
  sum = sum + number;
}
console.log("1-დან 100-მდე რცხვების ჯამია " + sum);
//6)დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.//
let monthCheck = Number(
  prompt(
    "თუ გინდა გაიგო რამდენი დღეა შენს მიერ მითითებულ თვეში,შეიყვანე რიცხვი:"
  )
);
switch (monthCheck) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("შენს მიერ მითითებულ თვეში არის 31 დღე");
    break;
  case 2:
    console.log("შენს მიერ მითითებულ თვეში არის 28 ან 29 დღე");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("შენს მიერ მითითებულ თვეში არის 30 დღე");
    break;
  default:
    console.log("შეგახსენებ,რომ წელიწადში სულ 12 თვეა!");
}
//7)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.//
let hidenNumber = 5;
let userNumber = Number(prompt("Guess hiden number:"));
while (hidenNumber != userNumber) {
  userNumber = Number(prompt("Guess hiden number:"));
}
console.log("გილოცავ,შენ იპოვე დამალული რიცხვი");
//do/while-ის შემთხვევაში//
let hidenNumber = 5;
let userNumber;
do {
  userNumber = Number(prompt("Guess hiden number:"));
} while (hidenNumber != userNumber);
console.log("gilocav shen gamoicani ricxvi");

//8)დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"//
let userInput = prompt(" შეიყვანე A, B, C, D ან F შენი შეფასების გასაგებად: ");
switch (userInput) {
  case "A":
    console.log("შესანიშნავია,შენ წარმატებით დახურე კურსი!");
    break;
  case "B":
    console.log("კარგია,შენ წარმატებით დახურე კურსი!");
    break;
  case "C":
    console.log("შენ დახურე კურსი,წარმატებები!");
    break;
  case "D":
    console.log("შენ დახურე კურსი,წარმატებები!");
    break;
  case "F":
    console.log("სამწუხაროდ შენ ვერ დახურე კურსი.!");
    break;
  default:
    console.log("მსგავსი სეფასება არ არის განსაზღვრული!");
}
//9)დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".//
let wrightPassword = 12345;
let userPassword;
do {
  userPassword = Number(prompt("პაროლი შედგება 5 ციფრისგან,შეიყვანეთ ის:"));
} while (userPassword != wrightPassword);
console.log("შენი პაროლი სწორია!");
//10)დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.//
function sumDigits(userNumber) {
  let digits = userNumber.toString().split("");
  let sumDigits = 0;
  for (let i = 0; i < digits.length; i++) {
    sumDigits = sumDigits + Number(digits[i]);
  }
  return sumDigits;
}
console.log(sumDigits(prompt("put your number here to see sum digits!")));

//11)დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.*/
function countBs(string) {
  let countBs = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      countBs += 1;
    }
  }
  console.log(countBs);
}
countBs("Bouncing bunnies Bring baskets of bright, Beautiful blooms.");
