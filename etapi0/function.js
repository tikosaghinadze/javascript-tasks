//1) დავწეროთ ფუნქცია,რომელიც დაპრინტავს "hello world!"
function hello(greeting) {
  console.log(greeting);
}
hello("Hello world!");

//2) დავწეროთ ფუნქცია რომელიც გამოიტანს ორი რიცხვის ჯამს//
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(20, 3);

//3)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს ტექსტს და აბრუნებს ტექსტის სიგრძეს.
function truMan(tru) {
  console.log(tru.length);
}
truMan("life is interesting!");
//4)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს 2 სიტყვას და აბრუნებს შეწებებულ სიტყვას.
function selfInformation(name, surname) {
  console.log(name + surname);
}
selfInformation("Tiko ", "Saghinadze");

//5)დავწეროთ ფუნქცია, რომელიც არგუმენტად იღებს სიტყვას და აბრუნებს ამ სიტყვას  დიდი ასოებით.
function upperCase(winadadeba) {
  console.log(winadadeba.toUpperCase());
}
upperCase("ratom ar gesmit?!kvirashi und aiyos mxolod 2 samushao dghe!");

//6)დავწეროთ ფუნქცია,რომელსაც არგუმენტად ექნება სახელი და დააბრუნებს "hello (saxeli)"
function information(saxeli) {
  console.log("Hello, " + saxeli);
}
information(prompt("what's your name"));

//7)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
function checkNumber(putNumber){
  if (putNumber % 2 === 0) {
  console.log("your number is even!");
} else {
  console.log("your number is odd!");
}
}
checkNumber(Number(prompt("put your number here:"));)

//8)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
function checkNumber(number){
  if (number < 0) {
  console.log("your number is negative!");
} else if (number > 0) {
  console.log("your number is positive!");
} else {
  console.log("your number is equale of 0");
}
}
checkNumber(Number(prompt("put your number here:")));

//9)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.
function checkNumber(num1,num2){
  let resulte = num1 / num2
  if (num1 % num2 === 0) {
  console.log("your resulte is " + resulte);
} else {
  console.log("i can't show your resulte!try again.");
}
}
checkNumber(Number(prompt("sheiyvane is ricxvi romelic ginda,rom gayo")),Number(
  prompt(
    "sheiyvane is ricxvi romelic ginda,rom gamoiyeno pirveli ricxvis gasayofad"
  )
));

//10)დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
function striqoni(food){
  if (food.length >0) {
  console.log("you shoul eat!");
} else {
  console.log("no food!");
}
}
striqoni("i'm very hungry!")

//11)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
function tikosBirthday(happyBirthday){
  let person="Tikos"
  if (happyBirthday.includes(person)) {
  console.log("Gilotsav TIKO");
} else {
  console.log("who is a TIKO?");
}}
tikosBirthday("ra lamazi dghea ra nateli dghea imitom ro dghes Tikos dabadebis dghea:dd")
//12)დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.

function minimaluriOriRicxvidan(num1,num2){
  if (num1 < num2) {
console.log("mititebuli ori ricxvidan pirveli aris minimaluri");
} else {
console.log("mititebuli ori ricxvidan meore aris minimaluri");
}
}
minimaluriOriRicxvidan(Number(prompt("put your first number here:")),Number(prompt("put your secend number here:")))